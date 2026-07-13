Tools/spkl/README.txt

Custom spkl.exe Build
====================

This spkl.exe is a custom build based on SparkleXrm 1.0.640 source code.

Modification:
- Commented out two lines in RegisterPluginSteps that attempt to directly update
  the assembly Content attribute. This is incompatible with package-managed plugin
  assemblies (registered via PAC plugin push).
- With this change, spkl only handles step registration; PAC handles assembly deployment.

Why:
- Package-managed assemblies don't allow direct Content updates via CrmServiceClient.Update()
- Original spkl 1.0.640 predates the Plugin Package model and doesn't know this constraint

To rebuild (if needed):
- [Brief instructions if you decide to rebuild later]

For details, see [link to your decision/issue if you documented it elsewhere]