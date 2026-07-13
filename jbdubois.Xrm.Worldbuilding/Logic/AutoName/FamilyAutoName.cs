using Microsoft.Xrm.Sdk;
using System.Xml.Linq;
using WorldBuilder.Base;
using WorldBuilder.Logic;
using WorldBuilder.Model;

public class FamilyAutoName : LogicBase, IAutoNameLogic
{
    public FamilyAutoName(IPluginBag bag) : base(bag) { }

    public void AutoName(Entity target)
    {
        var logic = new CharacterAutoNameLogic(this);
        logic.AutoNameFromFamily(target.ToEntity<JBDB_Family>());
    }
}