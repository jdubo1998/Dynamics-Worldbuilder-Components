using Microsoft.Xrm.Sdk;
using System.Xml.Linq;
using WorldBuilder.Base;
using WorldBuilder.Logic;
using WorldBuilder.Model;

public class TerritoryAutoNameLogic : LogicBase, IAutoNameLogic
{
    public TerritoryAutoNameLogic(IPluginBag bag) : base(bag) { }

    public void AutoName(Entity target)
    {
        var logic = new CharacterAutoNameLogic(this);
        logic.AutoNameFromTerritory(target.ToEntity<JBDB_Territory>());
    }
}