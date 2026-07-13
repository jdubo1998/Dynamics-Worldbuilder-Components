using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace WorldBuilder.Base
{
    public interface ILogicBase
    {
        void Create(Entity entity);
        void Update(Entity entity);
        void Upsert(Entity entity);
        void Activate(Entity entity, int? statecode, int? statuscode);
        void Deactivate(Entity entity, int? statecode, int? statuscode);
        void Delete(Entity entity);
        void DeleteAsSystem(Entity entity);
        T Retrieve<T>(Guid id, string[] columns) where T : Entity;
        T RetrieveFirst<T>(QueryExpression query, string[] columns) where T : Entity;
        IEnumerable<T> RetrieveMultiple<T>(QueryExpression query) where T : Entity;
        void ThrowIf(bool condition, string message);
        void Trace(string message);
        void TraceJson(object obj);
    }

    public abstract class LogicBase : ILogicBase
    {
        private readonly IOrganizationService _service;
        private readonly IOrganizationService _adminService;
        private readonly ITracingService _tracingService;
        private readonly string _className;

        public LogicBase(IOrganizationService service, IOrganizationService adminService, ITracingService tracingService)
        {
            _service = service;
            _adminService = adminService;
            _tracingService = tracingService;
            _className = GetType().Name;
        }

        public LogicBase(LogicBase other) : this(other._service, other._adminService, other._tracingService) { }

        public LogicBase(IPluginBag bag) : this(bag.Service, bag.Service, bag.TracingService) { }

        public void Create(Entity entity)
        {
            _service.Create(entity);
        }

        public void Update(Entity entity)
        {
            _service.Update(entity);
        }

        public void Upsert(Entity entity)
        {
            if (entity?.Id != null && entity?.Id != Guid.Empty)
            {
                _service.Update(entity);
            }
            else
            {
                _service.Create(entity);
            }
        }

        public void Activate(Entity entity, int? statecode, int? statuscode)
        {
            if (entity?.Id != null && entity?.Id != Guid.Empty)
            {
                var updateEntity = new Entity(entity.LogicalName, entity.Id);
                updateEntity["statecode"] = statecode ?? 0;
                updateEntity["statecode"] = statuscode ?? 1;
                _service.Update(updateEntity);
            }
        }

        public void Deactivate(Entity entity, int? statecode, int? statuscode)
        {
            if (entity?.Id != null && entity?.Id != Guid.Empty)
            {
                var updateEntity = new Entity(entity.LogicalName, entity.Id);
                updateEntity["statecode"] = statecode ?? 1;
                updateEntity["statecode"] = statuscode ?? 2;
                _service.Update(updateEntity);
            }
        }

        public void Delete(Entity entity)
        {
            if (entity?.Id != null && entity?.Id != Guid.Empty)
            {
                _service.Delete(entity.LogicalName, entity.Id);
            }
        }

        public void DeleteAsSystem(Entity entity)
        {
            if (entity?.Id != null && entity?.Id != Guid.Empty)
            {
                _adminService.Delete(entity.LogicalName, entity.Id);
            }
        }

        public T Retrieve<T>(Guid id, string[] columns) where T : Entity
        {
            throw new NotImplementedException();
        }

        public T RetrieveFirst<T>(QueryExpression query, string[] columns) where T : Entity
        {
            throw new NotImplementedException();
        }

        public IEnumerable<T> RetrieveMultiple<T>(QueryExpression query) where T : Entity
        {
            throw new NotImplementedException();
        }

        public void ThrowIf(bool condition, string message)
        {
            if (condition)
            {
                throw new InvalidPluginExecutionException(message);
            }
        }

        public void Trace(string message)
        {
            _tracingService.Trace($"[{_className}]   " + message);
        }

        public void TraceJson(object obj)
        {
            //var options = new JsonSerializerOptions { WriteIndented = true };
            //var json = JsonSerializer.Serialize(obj, options);
            //Trace(json);
        }
    }
}