/* 
optional data:
customTiers - these are auto-detected by the script, but you can set them here to ensure they show up in the right order
excludeStandardTiers - set to true if you want only your custom tiers to show up for the format
*/
const ModConfigData = {
	ClientMods: {
		cfm: {
			customTiers: ['CAG', 'CUb', 'COU', 'CUU', 'CRU', 'CNU', 'CPU', 'CZU', 'NFE', 'CLC'],
			excludeStandardTiers: true,
		}
	},
};
exports.ModConfigData = ModConfigData;
