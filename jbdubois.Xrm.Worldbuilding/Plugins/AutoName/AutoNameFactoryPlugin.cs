using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WorldBuilder.Logic;
using WorldBuilder.Base;
using WorldBuilder.Model;

namespace WorldBuilder.Plugins
{
    [
        /* ---------   Character AutoName   --------- */
        CrmPluginRegistration(
            MessageNameEnum.Create,
            JBDB_Character.EntityLogicalName,
            StageEnum.PreOperation,
            ExecutionModeEnum.Synchronous,
            JBDB_Character.Fields.JBDB_FirstName + "," + JBDB_Character.Fields.JBDB_CurrentFamily + ","
            + JBDB_Character.Fields.JBDB_CurrentTerritory + "," + JBDB_Character.Fields.JBDB_Inspiration + ","
            + JBDB_Character.Fields.JBDB_Title,
            "WorldBuilder.Plugins.AutoNameFactoryPlugin: Create of Character",
            1,
            IsolationModeEnum.Sandbox,
            Id = "A297B711-237C-F111-AB0E-6045BD08CA61"
        ),
        CrmPluginRegistration(
            MessageNameEnum.Update,
            JBDB_Character.EntityLogicalName,
            StageEnum.PreOperation,
            ExecutionModeEnum.Synchronous,
            JBDB_Character.Fields.JBDB_FirstName + "," + JBDB_Character.Fields.JBDB_CurrentFamily + ","
            + JBDB_Character.Fields.JBDB_CurrentTerritory + "," + JBDB_Character.Fields.JBDB_Inspiration + ","
            + JBDB_Character.Fields.JBDB_Title,
            "WorldBuilder.Plugins.AutoNameFactoryPlugin: Update of Character",
            1,
            IsolationModeEnum.Sandbox,
            Image1Name = "PreImage",
            Image1Type = ImageTypeEnum.PreImage,
            Image1Attributes = JBDB_Character.Fields.JBDB_FirstName + "," + JBDB_Character.Fields.JBDB_CurrentFamily + ","
            + JBDB_Character.Fields.JBDB_CurrentTerritory + "," + JBDB_Character.Fields.JBDB_Inspiration + ","
            + JBDB_Character.Fields.JBDB_Title,
            Id = "FDBA0037-237C-F111-AB0E-6045BD08CA61"
        ),
        CrmPluginRegistration(
            MessageNameEnum.Update,
            JBDB_Family.EntityLogicalName,
            StageEnum.PostOperation,
            ExecutionModeEnum.Synchronous,
            JBDB_Family.Fields.JBDB_Name,
            "WorldBuilder.Plugins.AutoNameFactoryPlugin: Update of Family Name",
            1,
            IsolationModeEnum.Sandbox,
            Id = "4D4A395F-237C-F111-AB0E-6045BD08CA61"
        ),
        CrmPluginRegistration(
            MessageNameEnum.Update,
            JBDB_Territory.EntityLogicalName,
            StageEnum.PostOperation,
            ExecutionModeEnum.Synchronous,
            JBDB_Family.Fields.JBDB_Name,
            "WorldBuilder.Plugins.AutoNameFactoryPlugin: Update of Territory Name",
            1,
            IsolationModeEnum.Sandbox,
            Id = "29669475-237C-F111-AB0E-6045BD08CA61"
        )
    ]

    public class AutoNameFactoryPlugin : PluginBase
    {
        public override void Execute(IPluginBag bag)
        {
            var pre = bag.PreImage;
            var target = bag.Target;

            target.ExtendMerge(pre);

            var logic = AutoNameLogicFactory.Create(bag, target);
            logic.AutoName(target);
        }
    }
}
