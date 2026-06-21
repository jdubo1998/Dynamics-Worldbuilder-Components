export class GuidUtility {
    public static  normalizeGuid(guid: string | null | undefined): String | null {
        if (!guid) {
            return null;
        }
        
        return guid.replace(/[{}]/g, "").toLowerCase();
    }

    public static compareGuids(guid1: string | null | undefined, guid2: string | null | undefined): boolean {
        return this.normalizeGuid(guid1) === this.normalizeGuid(guid2);
    }
}