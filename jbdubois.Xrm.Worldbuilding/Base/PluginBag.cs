using System;
using System.Linq;
using Microsoft.Xrm.Sdk;

namespace WorldBuilder.Base
{
    /// <summary>
    /// Abstraction for plugin context, services, and tracing.
    /// </summary>
    public interface IPluginBag
    {
        IPluginExecutionContext Context { get; }
        IOrganizationService Service { get; }
        ITracingService TracingService { get; }
        Entity PostImage { get; }
        Entity PreImage { get; }
        //Entity CombinedPost { get; }
        Entity Target { get; }
        void Trace(string message);
    }

    /// <summary>
    /// Concrete implementation of IPluginBag for accessing context and services.
    /// </summary>
    public class PluginBag : IPluginBag
    {
        public IPluginExecutionContext Context { get; }
        public IOrganizationService Service { get; }
        public ITracingService TracingService { get; }
        public Entity PreImage
        {
            get
            {
                if (Context.PreEntityImages != null && Context.PreEntityImages.Count > 0)
                {
                    return Context.PreEntityImages.Values.FirstOrDefault();
                }
                return null;
            }
        }
        public Entity PostImage {
            get {
                if (Context.PostEntityImages != null && Context.PostEntityImages.Count > 0)
                {
                    return Context.PostEntityImages.Values.FirstOrDefault();
                }
                return null;
            } 
        }
        public Entity Target {
            get
            {
                if (Context.InputParameters.Contains("Target") && Context.InputParameters["Target"] is Entity)
                {
                    return Context.InputParameters["Target"] as Entity;
                }
                return null;
            }
        }


        public PluginBag(IServiceProvider serviceProvider)
        {
            Context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));
            var factory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            Service = factory.CreateOrganizationService(Context.UserId);
            TracingService = (ITracingService)serviceProvider.GetService(typeof(ITracingService));

            if (Context == null)
            {
                throw new InvalidPluginExecutionException("Plugin execution context is null.");
            };
        }

        public void Trace(string message)
        {
            TracingService?.Trace(message);
        }
    }
}
