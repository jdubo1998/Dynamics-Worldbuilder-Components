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
            Id = "42FEEA21-75A0-4D4B-85BE-B94572764F76"
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
            Image2Name = "PostImage",
            Image2Type = ImageTypeEnum.PostImage,
            Image2Attributes = JBDB_Character.Fields.JBDB_FirstName + "," + JBDB_Character.Fields.JBDB_CurrentFamily + ","
            + JBDB_Character.Fields.JBDB_CurrentTerritory + "," + JBDB_Character.Fields.JBDB_Inspiration + ","
            + JBDB_Character.Fields.JBDB_Title,
            Id = "6D140707-3201-4922-B018-587190C24BAD"
        )
    ]

    public class AutoNameFactoryPlugin : PluginBase
    {
        public override void Execute(IPluginBag bag)
        {
            ValidatePlugin(bag, GetType().Name, new string[] { "CREATE" }, new string[] { "POST" }, StageEnum.PreOperation, JBDB_Character.EntityLogicalName);
        }
    }
}
