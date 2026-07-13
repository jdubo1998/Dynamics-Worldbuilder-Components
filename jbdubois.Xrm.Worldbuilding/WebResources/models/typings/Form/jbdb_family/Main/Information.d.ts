declare namespace Form.jbdb_family.Main {
  namespace Information {
    namespace Tabs {
      interface tab_General extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "jbdb_name"): Xrm.Attribute<string>;
      get(name: "jbdb_subterritoryid"): Xrm.LookupAttribute<"jbdb_subterritory">;
      get(name: "jbdb_territory"): Xrm.LookupAttribute<"jbdb_territory">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "jbdb_name"): Xrm.StringControl;
      get(name: "jbdb_subterritoryid"): Xrm.LookupControl<"jbdb_subterritory">;
      get(name: "jbdb_territory"): Xrm.LookupControl<"jbdb_territory">;
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
      jbdb_name: string;
      jbdb_subterritoryid: Xrm.EntityReference<"jbdb_subterritory">;
      jbdb_territory: Xrm.EntityReference<"jbdb_territory">;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
    }
    interface ControlMap {
      jbdb_name: Xrm.StringControl;
      jbdb_subterritoryid: Xrm.LookupControl<"jbdb_subterritory">;
      jbdb_territory: Xrm.LookupControl<"jbdb_territory">;
      ownerid: Xrm.LookupControl<"systemuser" | "team">;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls,Information.QuickViewForms> {
    getAttribute(attributeName: "jbdb_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "jbdb_subterritoryid"): Xrm.LookupAttribute<"jbdb_subterritory">;
    getAttribute(attributeName: "jbdb_territory"): Xrm.LookupAttribute<"jbdb_territory">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "jbdb_name"): Xrm.StringControl;
    getControl(controlName: "jbdb_subterritoryid"): Xrm.LookupControl<"jbdb_subterritory">;
    getControl(controlName: "jbdb_territory"): Xrm.LookupControl<"jbdb_territory">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
