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
            Id = "AEAD1D21-C26C-F111-AB0D-000D3A37ED40"
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
            Id = "3D36AC41-C26C-F111-AB0D-000D3A37ED40"
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
