declare namespace Form.jbdb_locationhistory.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "jbdb_Name"): Xrm.Attribute<string>;
      get(name: "jbdb_character"): Xrm.LookupAttribute<"jbdb_character">;
      get(name: "jbdb_location"): Xrm.LookupAttribute<"jbdb_location">;
      get(name: "jbdb_startdate"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "jbdb_character"): Xrm.LookupControl<"jbdb_character">;
      get(name: "jbdb_location"): Xrm.LookupControl<"jbdb_location">;
      get(name: "jbdb_name"): Xrm.StringControl;
      get(name: "jbdb_startdate"): Xrm.DateControl;
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
      jbdb_Name: string;
      jbdb_character: Xrm.EntityReference<"jbdb_character">;
      jbdb_location: Xrm.EntityReference<"jbdb_location">;
      jbdb_startdate: Date;
      ownerid: Xrm.EntityReference<"systemuser" | "team">;
    }
    interface ControlMap {
      jbdb_character: Xrm.LookupControl<"jbdb_character">;
      jbdb_location: Xrm.LookupControl<"jbdb_location">;
      jbdb_name: Xrm.StringControl;
      jbdb_startdate: Xrm.DateControl;
      ownerid: Xrm.LookupControl<"systemuser" | "team">;
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls,Information.QuickViewForms> {
    getAttribute(attributeName: "jbdb_Name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "jbdb_character"): Xrm.LookupAttribute<"jbdb_character">;
    getAttribute(attributeName: "jbdb_location"): Xrm.LookupAttribute<"jbdb_location">;
    getAttribute(attributeName: "jbdb_startdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "jbdb_character"): Xrm.LookupControl<"jbdb_character">;
    getControl(controlName: "jbdb_location"): Xrm.LookupControl<"jbdb_location">;
    getControl(controlName: "jbdb_name"): Xrm.StringControl;
    getControl(controlName: "jbdb_startdate"): Xrm.DateControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
