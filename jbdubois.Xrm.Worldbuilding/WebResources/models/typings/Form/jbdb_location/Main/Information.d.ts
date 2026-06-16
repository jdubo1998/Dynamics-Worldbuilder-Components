declare namespace Form.jbdb_location.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "jbdb_name"): Xrm.Attribute<string>;
      get(name: "jbdb_region"): Xrm.LookupAttribute<"jbdb_region">;
      get(name: "jbdb_subterritory"): Xrm.LookupAttribute<"jbdb_subterritory">;
      get(name: "jbdb_territory"): Xrm.LookupAttribute<"jbdb_territory">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "jbdb_name"): Xrm.StringControl;
      get(name: "jbdb_region"): Xrm.LookupControl<"jbdb_region">;
      get(name: "jbdb_subterritory"): Xrm.LookupControl<"jbdb_subterritory">;
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
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
    interface AttributeValueMap {
      jbdb_name: string;
      jbdb_region: Xrm.EntityReference<"jbdb_region">;
      jbdb_subterritory: Xrm.EntityReference<"jbdb_subterritory">;
      jbdb_territory: Xrm.EntityReference<"jbdb_territory">;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
    }
    interface ControlMap {
      jbdb_name: Xrm.StringControl;
      jbdb_region: Xrm.LookupControl<"jbdb_region">;
      jbdb_subterritory: Xrm.LookupControl<"jbdb_subterritory">;
      jbdb_territory: Xrm.LookupControl<"jbdb_territory">;
      ownerid: Xrm.LookupControl<"systemuser" | "team">;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls,Information.QuickViewForms> {
    getAttribute(attributeName: "jbdb_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "jbdb_region"): Xrm.LookupAttribute<"jbdb_region">;
    getAttribute(attributeName: "jbdb_subterritory"): Xrm.LookupAttribute<"jbdb_subterritory">;
    getAttribute(attributeName: "jbdb_territory"): Xrm.LookupAttribute<"jbdb_territory">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "jbdb_name"): Xrm.StringControl;
    getControl(controlName: "jbdb_region"): Xrm.LookupControl<"jbdb_region">;
    getControl(controlName: "jbdb_subterritory"): Xrm.LookupControl<"jbdb_subterritory">;
    getControl(controlName: "jbdb_territory"): Xrm.LookupControl<"jbdb_territory">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
