using Microsoft.Xrm.Sdk;
using System.ServiceModel.Channels;

namespace WorldBuilder.Base
{
    public interface IPluginBase
    {
        void Execute(IPluginBag pluginBag);
        void Execute(IServiceProvider serviceProvider);
    }

    public abstract class PluginBase : IPlugin, IPluginBase
    {
        public PluginBase()
        {
        }

        public abstract void Execute(IPluginBag bag);

        public virtual void Execute(IServiceProvider serviceProvider)
        {
            var bag = new PluginBag(serviceProvider);
            TraceExecutionContext(bag.TracingService, bag.Context);
            Execute(bag);
        }

        public void TraceExecutionContext(ITracingService tracingService, IPluginExecutionContext context)
        {
            tracingService.Trace($"=========   PLUGIN EXECUTION START   =========");

            tracingService.Trace("Message: {0}", context.MessageName);
            tracingService.Trace("Stage: {0}", Enum.GetName(typeof(StageEnum), context.Stage));
            tracingService.Trace("Mode: {0}", context.Mode == 0 ? "Synchronous" : "Asynchronous");
            tracingService.Trace("Primary Entity: {0}", context.PrimaryEntityName);
            //tracingService.Trace("Secondary Entity: {0}", context.SecondaryEntityName);
            tracingService.Trace("Depth: {0}", context.Depth);
            tracingService.Trace("UserId: {0}", context.UserId);
            //tracingService.Trace("InitiatingUserId: {0}", context.InitiatingUserId);
            //tracingService.Trace("CorrelationId: {0}", context.CorrelationId);
            //tracingService.Trace("OperationId: {0}", context.OperationId);
            //tracingService.Trace("BusinessUnitId: {0}", context.BusinessUnitId);
            //tracingService.Trace("OrganizationId: {0}", context.OrganizationId);

            // Target
            if (context.InputParameters.Contains("Target") && context.InputParameters["Target"] is Entity target)
            {
                tracingService.Trace("\n--- TARGET ENTITY ---");
                tracingService.Trace("LogicalName: {0}", target.LogicalName);
                tracingService.Trace("Id: {0}", target.Id);

                foreach (var attr in target.Attributes)
                    if (attr.Value is not null and EntityReference)
                        tracingService.Trace("   Target[{0}] = {1} ({2}) [{3}]", attr.Key, ((EntityReference)attr.Value).Name, ((EntityReference)attr.Value).LogicalName, ((EntityReference)attr.Value).Id);
                    else if (attr.Value != null)
                        tracingService.Trace("   Target[{0}] = {1}", attr.Key, attr.Value);
            }

            // Pre-Image
            if (context.PreEntityImages != null && context.PreEntityImages.Count > 0)
            {
                var pre = context.PreEntityImages.Values.First();
                tracingService.Trace("\n---   PRE IMAGE   ---");
                tracingService.Trace("LogicalName: {0}", pre.LogicalName);
                tracingService.Trace("Id: {0}", pre.Id);

                foreach (var attr in pre.Attributes)
                    if (attr.Value is not null and EntityReference)
                        tracingService.Trace("   PreImage[{0}] = {1} ({2}) [{3}]", attr.Key, ((EntityReference)attr.Value).Name, ((EntityReference)attr.Value).LogicalName, ((EntityReference)attr.Value).Id);
                    else if (attr.Value != null)
                        tracingService.Trace("   PreImage[{0}] = {1}", attr.Key, attr.Value);
            }

            // Post-Image
            if (context.PostEntityImages != null && context.PostEntityImages.Count > 0)
            {
                var post = context.PostEntityImages.Values.First();
                tracingService.Trace("\n---   POST IMAGE   ---");
                tracingService.Trace("LogicalName: {0}", post.LogicalName);
                tracingService.Trace("Id: {0}", post.Id);

                foreach (var attr in post.Attributes)
                    if (attr.Value is not null and EntityReference)
                        tracingService.Trace("   PostImage[{0}] = {1} ({2}) [{3}]", attr.Key, ((EntityReference)attr.Value).Name, ((EntityReference)attr.Value).LogicalName, ((EntityReference)attr.Value).Id);
                    else if (attr.Value != null)
                        tracingService.Trace("   PostImage[{0}] = {1}", attr.Key, attr.Value);
            }

            tracingService.Trace("\n=========   PLUGIN EXECUTION END   =========\n");
        }


        public void ValidatePlugin(IPluginBag bag, string pluginName, string[] message, StageEnum stage, string entityLogicalName)
        {
            ValidatePlugin(bag, pluginName, message, null, stage, entityLogicalName);
        }

        public void ValidatePlugin(IPluginBag bag, string pluginName, string[] messages, string[] images, StageEnum stage, string entityLogicalName)
        {
            var message = bag.Context.MessageName.ToUpper();

            if (!messages.Contains(message))
            {
                throw new InvalidPluginExecutionException($"{pluginName} can only run on messages: {String.Join(",", messages)}");
            }

            if (bag.PreImage == null && messages.Contains("PRE") && message != "CREATE")
            {
                throw new InvalidPluginExecutionException($"{pluginName} {bag.Context.MessageName} step must have a Pre-Image.");
            }

            if (bag.PostImage == null && messages.Contains("POST") && message != "DELETE")
            {
                throw new InvalidPluginExecutionException($"{pluginName} {bag.Context.MessageName} step must have a Post-Image.");
            }

            if (bag.Context.Stage != (int)stage)
            {
                throw new InvalidPluginExecutionException($"{pluginName} can only run on {Enum.GetName(typeof(StageEnum), (int)stage)} stage.");
            }
        }
    }
}