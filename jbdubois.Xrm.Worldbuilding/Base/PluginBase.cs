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
            Execute(bag);
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
}