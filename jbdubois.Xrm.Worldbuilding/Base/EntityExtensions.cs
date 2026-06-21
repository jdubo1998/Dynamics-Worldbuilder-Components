using Microsoft.Xrm.Sdk;

namespace WorldBuilder.Base
{
    public static class EntityExtensions
    {
        /// <summary>
        /// Creates a new merged Entity by combining attributes from baseEntity and overlayEntity.
        /// Neither input entity is modified.
        /// </summary>
        public static Entity OverWriteMerge(Entity baseEntity, Entity overlayEntity)
        {
            if (baseEntity == null && overlayEntity == null)
                return null;

            // Create a new entity with the logical name from base or overlay
            var merged = new Entity(baseEntity?.LogicalName ?? overlayEntity.LogicalName);

            // Copy base attributes first
            if (baseEntity != null)
            {
                foreach (var kvp in baseEntity.Attributes)
                    merged[kvp.Key] = kvp.Value;

                merged.Id = baseEntity.Id;
            }

            // Overlay attributes (overwrite conflicts)
            if (overlayEntity != null)
            {
                foreach (var kvp in overlayEntity.Attributes)
                    merged[kvp.Key] = kvp.Value;
            }

            return merged;
        }

        /// <summary>
        /// Takes an entity and mutates it by merging in attributes from another entity.
        /// Attributes from the extenderEntity will add to the baseEntity without overwriting.
        /// </summary>
        public static void ExtendMerge(this Entity baseEntity, Entity extenderEntity)
        {
            if (baseEntity == null && extenderEntity == null) return;

            // Add missing attributes (do NOT overwrite conflicts)
            if (extenderEntity != null)
            {
                foreach (var kvp in extenderEntity.Attributes)
                    if (!baseEntity.Attributes.ContainsKey(kvp.Key))
                        baseEntity[kvp.Key] = kvp.Value;
            }

            return;
        }
    }
}