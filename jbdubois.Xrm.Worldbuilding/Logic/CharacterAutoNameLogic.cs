using Microsoft.Xrm.Sdk;
using System.Windows.Media.Media3D;
using System.Xml.Linq;
using WorldBuilder.Base;
using WorldBuilder.Logic;
using WorldBuilder.Model;

public class CharacterAutoNameLogic : LogicBase, IAutoNameLogic
{
    public CharacterAutoNameLogic(IPluginBag bag) : base(bag) { }

    public void AutoName(Entity target)
    {
        var character = target.ToEntity<JBDB_Character>();



        var title = character.JBDB_Title;
        var name = character.JBDB_FirstName;
        var inspiration = character.JBDB_Inspiration;
        var familyName = character.JBDB_CurrentFamily?.Name;
        var territory = character.JBDB_CurrentTerritory?.Name;

        // Name | Inspiration (name takes precedence)
        var nameOrInspiration = !string.IsNullOrWhiteSpace(name)
            ? name
            : !string.IsNullOrEmpty(inspiration)
            ? $"({inspiration})" :
            null;

        // Build main parts, skipping null/empty
        var parts = new[] { title, nameOrInspiration, familyName }
            .Where(s => !string.IsNullOrWhiteSpace(s));

        var fullName = string.Join(" ", parts);

        // Add territory only if present
        if (!string.IsNullOrWhiteSpace(territory))
            fullName += $" - {territory}";

        character.JBDB_Name = fullName;
    }
}