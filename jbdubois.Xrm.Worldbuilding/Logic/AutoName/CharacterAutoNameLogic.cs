using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using System.Linq;
using WorldBuilder.Base;
using WorldBuilder.Logic;
using WorldBuilder.Model;

public class CharacterAutoNameLogic : LogicBase, IAutoNameLogic
{
    public CharacterAutoNameLogic(LogicBase other) : base(other) { }

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

    public void AutoNameFromTerritory(JBDB_Territory territory)
    {
        var query = new QueryExpression(JBDB_Character.EntityLogicalName);
        query.ColumnSet.AddColumns(
            JBDB_Character.Fields.JBDB_CurrentFamily,
            JBDB_Character.Fields.JBDB_CurrentTerritory,
            JBDB_Character.Fields.JBDB_FirstName,
            JBDB_Character.Fields.JBDB_Inspiration,
            JBDB_Character.Fields.JBDB_Title);
        query.Criteria.AddCondition(JBDB_Character.Fields.JBDB_CurrentTerritory, ConditionOperator.Equal, territory.Id);

        var characters = RetrieveMultiple<JBDB_Character>(query);
        foreach (var character in characters)
        {
            AutoName(character);
        }
    }

    public void AutoNameFromFamily(JBDB_Family family)
    {
        var query = new QueryExpression(JBDB_Character.EntityLogicalName);
        query.ColumnSet.AddColumns(
            JBDB_Character.Fields.JBDB_CurrentFamily,
            JBDB_Character.Fields.JBDB_CurrentTerritory,
            JBDB_Character.Fields.JBDB_FirstName,
            JBDB_Character.Fields.JBDB_Inspiration,
            JBDB_Character.Fields.JBDB_Title);
        query.Criteria.AddCondition(JBDB_Character.Fields.JBDB_CurrentFamily, ConditionOperator.Equal, family.Id);

        var characters = RetrieveMultiple<JBDB_Character>(query);
        foreach (var character in characters)
        {
            AutoName(character);
        }
    }
}