using WorldBuilder.Model;
using WorldBuilder.Base;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorldBuilder.Logic
{
    public interface IAutoNameLogic
    {
        void AutoName(Entity entity);
    }

    public class AutoNameLogicFactory
    {
        public static IAutoNameLogic Create(IPluginBag bag, Entity entity)
        {
            switch(entity.LogicalName)
            {
                case JBDB_Character.EntityLogicalName:
                    return new CharacterAutoNameLogic(bag);
                default:
                    throw new NotImplementedException($"AutoName logic not implemented for Entity: {entity.LogicalName}");
            }
        }
    }
}
