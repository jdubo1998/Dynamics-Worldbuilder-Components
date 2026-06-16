declare namespace Form.jbdb_character.Main {
  namespace Information {
    namespace Tabs {
      interface tab_General extends Xrm.SectionCollectionBase {
        get(name: "section_ExternalLinks"): Xrm.PageSection;
        get(name: "section_General"): Xrm.PageSection;
        get(name: "tab_Extra"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "jbdb_birthyear"): Xrm.NumberAttribute;
      get(name: "jbdb_currentfamily"): Xrm.LookupAttribute<"jbdb_family">;
      get(name: "jbdb_firstname"): Xrm.Attribute<string>;
      get(name: "jbdb_heightininches"): Xrm.NumberAttribute;
      get(name: "jbdb_heroforgeurl"): Xrm.Attribute<string>;
      get(name: "jbdb_infamilytree"): Xrm.OptionSetAttribute<boolean>;
      get(name: "jbdb_inspiration"): Xrm.Attribute<string>;
      get(name: "jbdb_isheroforgecomplete"): Xrm.OptionSetAttribute<boolean>;
      get(name: "jbdb_name"): Xrm.Attribute<string>;
      get(name: "jbdb_title"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "jbdb_birthyear"): Xrm.NumberControl;
      get(name: "jbdb_currentfamily"): Xrm.LookupControl<"jbdb_family">;
      get(name: "jbdb_firstname"): Xrm.StringControl;
      get(name: "jbdb_heightininches"): Xrm.NumberControl;
      get(name: "jbdb_heroforgeurl"): Xrm.StringControl;
      get(name: "jbdb_infamilytree"): Xrm.OptionSetControl<boolean>;
      get(name: "jbdb_inspiration"): Xrm.StringControl;
      get(name: "jbdb_isheroforgecomplete"): Xrm.OptionSetControl<boolean>;
      get(name: "jbdb_name"): Xrm.StringControl;
      get(name: "jbdb_title"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface QuickViewForms extends Xrm.QuickViewFormCollectionBase {
      get(name: string): undefined;
      get(): Xrm.QuickViewFormBase[];
      get(index: number): Xrm.QuickViewFormBase;
      get(chooser: (item: Xrm.QuickViewFormBase, index: number) => boolean): Xrm.QuickViewFormBase[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_General"): Xrm.PageTab<Tabs.tab_General>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      jbdb_birthyear: number;
      jbdb_currentfamily: Xrm.EntityReference<"jbdb_family">;
      jbdb_firstname: string;
      jbdb_heightininches: number;
      jbdb_heroforgeurl: string;
      jbdb_infamilytree: boolean;
      jbdb_inspiration: string;
      jbdb_isheroforgecomplete: boolean;
      jbdb_name: string;
      jbdb_title: string;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
    }
    interface ControlMap {
      jbdb_birthyear: Xrm.NumberControl;
      jbdb_currentfamily: Xrm.LookupControl<"jbdb_family">;
      jbdb_firstname: Xrm.StringControl;
      jbdb_heightininches: Xrm.NumberControl;
      jbdb_heroforgeurl: Xrm.StringControl;
      jbdb_infamilytree: Xrm.OptionSetControl<boolean>;
      jbdb_inspiration: Xrm.StringControl;
      jbdb_isheroforgecomplete: Xrm.OptionSetControl<boolean>;
      jbdb_name: Xrm.StringControl;
      jbdb_title: Xrm.StringControl;
      ownerid: Xrm.LookupControl<"systemuser" | "team">;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls,Information.QuickViewForms> {
    getAttribute(attributeName: "jbdb_birthyear"): Xrm.NumberAttribute;
    getAttribute(attributeName: "jbdb_currentfamily"): Xrm.LookupAttribute<"jbdb_family">;
    getAttribute(attributeName: "jbdb_firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "jbdb_heightininches"): Xrm.NumberAttribute;
    getAttribute(attributeName: "jbdb_heroforgeurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "jbdb_infamilytree"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "jbdb_inspiration"): Xrm.Attribute<string>;
    getAttribute(attributeName: "jbdb_isheroforgecomplete"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "jbdb_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "jbdb_title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "jbdb_birthyear"): Xrm.NumberControl;
    getControl(controlName: "jbdb_currentfamily"): Xrm.LookupControl<"jbdb_family">;
    getControl(controlName: "jbdb_firstname"): Xrm.StringControl;
    getControl(controlName: "jbdb_heightininches"): Xrm.NumberControl;
    getControl(controlName: "jbdb_heroforgeurl"): Xrm.StringControl;
    getControl(controlName: "jbdb_infamilytree"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "jbdb_inspiration"): Xrm.StringControl;
    getControl(controlName: "jbdb_isheroforgecomplete"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "jbdb_name"): Xrm.StringControl;
    getControl(controlName: "jbdb_title"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
