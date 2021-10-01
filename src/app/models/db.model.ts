export interface WeaponDMG {
  weapon?: string;
  baseDamage?: string;
  fireRate?: string;
  reloadDuration?: string;
  spawnRate?: string;
  avgAccuracy?: string;
  avgKillDistance?: string;
  img?: string;
}

export const assaultRifles: WeaponDMG[] = [
  {
    weapon: 'AKM', baseDamage: '47', fireRate: '0.1s', reloadDuration: '2.9s',
    spawnRate: '8.16%', avgAccuracy: '13.32%', avgKillDistance: '14.21m', img: 'assets/weapons/AR/Item_Weapon_AK47_C.png'
  },
  {
    weapon: 'AUG A3', baseDamage: '41', fireRate: '0.085s', reloadDuration: '3.66s',
    spawnRate: '0.13%', avgAccuracy: '11.87%', avgKillDistance: '24.57m', img: 'assets/weapons/AR/Item_Weapon_AUG_C.png'
  },
  {
    weapon: 'Beryl M762', baseDamage: '46', fireRate: '0.086s', reloadDuration: '2.9s',
    spawnRate: '3.67%', avgAccuracy: '13.21%', avgKillDistance: '12.06m', img: 'assets/weapons/AR/Item_Weapon_BerylM762_C.png'
  },
  {
    weapon: 'G36C', baseDamage: '41', fireRate: '0.086s', reloadDuration: '3.8s',
    spawnRate: '10.11%', avgAccuracy: '13.36%', avgKillDistance: '15.47m', img: 'assets/weapons/AR/Item_Weapon_G36C_C.png'
  },
  {
    weapon: 'Groza', baseDamage: '47', fireRate: '0.08s', reloadDuration: '3s',
    spawnRate: '0.1%', avgAccuracy: '10.24%', avgKillDistance: '21.18m', img: 'assets/weapons/AR/Item_Weapon_Groza_C.png'
  },
  {
    weapon: 'M16A4', baseDamage: '43', fireRate: '0.075s', reloadDuration: '2.2s',
    spawnRate: '5.56%', avgAccuracy: '22.69%', avgKillDistance: '23.6m', img: 'assets/weapons/AR/Item_Weapon_M16A4_C.png'
  },
  {
    weapon: 'M416', baseDamage: '41', fireRate: '0.085s', reloadDuration: '2.1s',
    spawnRate: '9.87%', avgAccuracy: '12.38%', avgKillDistance: '19.23m', img: 'assets/weapons/AR/Item_Weapon_HK416_C.png'
  },
  {
    weapon: 'Mk47 Mutant', baseDamage: '49', fireRate: '0.1s', reloadDuration: '3.36s',
    spawnRate: '2.41%', avgAccuracy: '22.18%', avgKillDistance: '18.85m', img: 'assets/weapons/AR/Item_Weapon_Mk47Mutant_C.png'
  },
  {
    weapon: 'QBZ95', baseDamage: '41', fireRate: '0.092s', reloadDuration: '3.66s',
    spawnRate: '9.26%', avgAccuracy: '13.99%', avgKillDistance: '15.25m', img: 'assets/weapons/AR/Item_Weapon_QBZ95_C.png'
  },
  {
    weapon: 'SCAR-L', baseDamage: '41', fireRate: '0.096s', reloadDuration: '2.2s',
    spawnRate: '7.49%', avgAccuracy: '12.87%', avgKillDistance: '18.23m', img: 'assets/weapons/AR/Item_Weapon_SCAR-L_C.png'
  },
];

export const dmrRifles: WeaponDMG[] = [
  {
    weapon: 'Mini 14', baseDamage: '46', fireRate: '0.13s', reloadDuration: '3.6s',
    spawnRate: '3.93%', avgAccuracy: '24.86%', avgKillDistance: '82.11m', img: 'assets/weapons/DMR/Item_Weapon_Mini14_C.png'
  },
  {
    weapon: 'Mk14 EBR', baseDamage: '61', fireRate: '0.09s', reloadDuration: '3.68s',
    spawnRate: '0.14%', avgAccuracy: '26.15%', avgKillDistance: '151.73m', img: 'assets/weapons/DMR/Item_Weapon_Mk14_C.png'
  },
  {
    weapon: 'QBU', baseDamage: '48', fireRate: '0.1s', reloadDuration: '3s',
    spawnRate: '5.57%', avgAccuracy: '23.95%', avgKillDistance: '72.41m', img: 'assets/weapons/DMR/Item_Weapon_QBU88_C.png'
  },
  {
    weapon: 'SKS', baseDamage: '53', fireRate: '0.09s', reloadDuration: '4.55s',
    spawnRate: '4.66%', avgAccuracy: '25.75%', avgKillDistance: '96.08m', img: 'assets/weapons/DMR/Item_Weapon_SKS_C.png'
  },
  {
    weapon: 'SLR', baseDamage: '58', fireRate: '0.1s', reloadDuration: '3.68s',
    spawnRate: '3.68%', avgAccuracy: '25.98%', avgKillDistance: '117.82m', img: 'assets/weapons/DMR/Item_Weapon_FNFal_C.png'
  },
  {
    weapon: 'VSS', baseDamage: '41', fireRate: '0.086s', reloadDuration: '2.9s',
    spawnRate: '1.16%', avgAccuracy: '14.37%', avgKillDistance: '29.11m', img: 'assets/weapons/DMR/Item_Weapon_VSS_C.png'
  },
];

export const smgRifles: WeaponDMG[] = [
  {
    weapon: 'MP5K', baseDamage: '33', fireRate: '0.066s', reloadDuration: '4.58s',
    spawnRate: '6.36%', avgAccuracy: '14.62%', avgKillDistance: '14.9m', img: 'assets/weapons/SMG/Item_Weapon_MP5K_C.png'
  },
  {
    weapon: 'Micro UZI', baseDamage: '26', fireRate: '0.048s', reloadDuration: '3.1s',
    spawnRate: '2.92%', avgAccuracy: '12.6%', avgKillDistance: '6.01m', img: 'assets/weapons/SMG/Item_Weapon_UZI_C.png'
  },
  {
    weapon: 'PP-19 BIZON', baseDamage: '35', fireRate: '0.65s', reloadDuration: '3.7s',
    spawnRate: '2.45%', avgAccuracy: '14.04%', avgKillDistance: '8.03m', img: 'assets/weapons/SMG/Item_Weapon_BizonPP19_C.png'
  },
  {
    weapon: 'Tommy Gun', baseDamage: '40', fireRate: '0.086s', reloadDuration: '3.45s',
    spawnRate: '1.29%', avgAccuracy: '12.66%', avgKillDistance: '8.45m', img: 'assets/weapons/SMG/Item_Weapon_Thompson_C.png'
  },
  {
    weapon: 'UMP45', baseDamage: '39', fireRate: '0.092s', reloadDuration: '3.1s',
    spawnRate: '3.27%', avgAccuracy: '15.36%', avgKillDistance: '10.75m', img: 'assets/weapons/SMG/Item_Weapon_UMP_C.png'
  },
  {
    weapon: 'Vector', baseDamage: '31', fireRate: '0.055s', reloadDuration: '2.2s',
    spawnRate: '2.63%', avgAccuracy: '12.58%', avgKillDistance: '9.52m', img: 'assets/weapons/SMG/Item_Weapon_Vector_C.png'
  },
];

export const shotgunsRifles: WeaponDMG[] = [
  {
    weapon: 'S12K', baseDamage: '24', fireRate: '0.25s', reloadDuration: '3s',
    spawnRate: '1.08%', avgAccuracy: '87.01%', avgKillDistance: '6.39m', img: 'assets/weapons/SHOUTGUNS/Item_Weapon_Saiga12_C.png'
  },
  {
    weapon: 'S1897', baseDamage: '26', fireRate: '0.75s', reloadDuration: '4s',
    spawnRate: '3.44%', avgAccuracy: '91.44%', avgKillDistance: '6.61m', img: 'assets/weapons/SHOUTGUNS/Item_Weapon_Winchester_C.png'
  },
  {
    weapon: 'S686', baseDamage: '26', fireRate: '0.2s', reloadDuration: '3s',
    spawnRate: '2.48%', avgAccuracy: '91.5%', avgKillDistance: '4.92m', img: 'assets/weapons/SHOUTGUNS/Item_Weapon_Berreta686_C.png'
  },
  {
    weapon: 'Sawed-off', baseDamage: '22', fireRate: '0.25s', reloadDuration: '4s',
    spawnRate: '0.42%', avgAccuracy: '91.45%', avgKillDistance: '6.11m', img: 'assets/weapons/SHOUTGUNS/Item_Weapon_Sawnoff_C.png'
  },
  {
    weapon: 'DBS', baseDamage: '26', fireRate: '0.2s', reloadDuration: '3s',
    spawnRate: '0.07%', avgAccuracy: '85.35%', avgKillDistance: '9.37m', img: 'assets/weapons/SHOUTGUNS/Item_Weapon_DP12_C.png'
  },
];

export const sniperRifles: WeaponDMG[] = [
  {
    weapon: 'AWM', baseDamage: '105', fireRate: '1.85s', reloadDuration: '4.6s',
    spawnRate: '0.23%', avgAccuracy: '12.82%', avgKillDistance: '148.51m', img: 'assets/weapons/SNIPER/Item_Weapon_AWM_C.png'
  },
  {
    weapon: 'Kar98k', baseDamage: '79', fireRate: '1.9s', reloadDuration: '4s',
    spawnRate: '4.4%', avgAccuracy: '7.85%', avgKillDistance: '111.13m', img: 'assets/weapons/SNIPER/Item_Weapon_Kar98k_C.png'
  },
  {
    weapon: 'M24', baseDamage: '75', fireRate: '1.8s', reloadDuration: '4.2s',
    spawnRate: '2.5%', avgAccuracy: '8.93%', avgKillDistance: '106.88m', img: 'assets/weapons/SNIPER/Item_Weapon_M24_C.png'
  },
  {
    weapon: 'Win94', baseDamage: '66', fireRate: '0.6s', reloadDuration: '4s',
    spawnRate: '7.98%', avgAccuracy: '44.43%', avgKillDistance: '47.75m', img: 'assets/weapons/SNIPER/Item_Weapon_Win1894_C.png'
  },
];

export const lmgRifles: WeaponDMG[] = [
  {
    weapon: 'DP-28', baseDamage: '51', fireRate: '0.109s', reloadDuration: '5.5s',
    spawnRate: '2.63%', avgAccuracy: '15.33%', avgKillDistance: '12.99m', img: 'assets/weapons/LMG/Item_Weapon_DP28_C.png'
  },
  {
    weapon: 'M249', baseDamage: '45', fireRate: '0.075s', reloadDuration: '8.2s',
    spawnRate: '0.09%', avgAccuracy: '12.72%', avgKillDistance: '23.13m', img: 'assets/weapons/LMG/Item_Weapon_M249_C.png'
  },
];

export const pistols: WeaponDMG[] = [
  {
    weapon: 'Deagle', baseDamage: '62', fireRate: '0.25s', reloadDuration: '2.5s',
    spawnRate: '0.59%', avgAccuracy: '40.43%', avgKillDistance: '42.49m', img: 'assets/weapons/PISTOLS/Item_Weapon_DesertEagle_C.png'
  },
  {
    weapon: 'P18C', baseDamage: '23', fireRate: '0.06s', reloadDuration: '2s',
    spawnRate: '0.27%', avgAccuracy: '31.27%', avgKillDistance: '71.62m', img: 'assets/weapons/PISTOLS/Item_Weapon_G18_C.png'
  },
  {
    weapon: 'P1911', baseDamage: '41', fireRate: '0.11s', reloadDuration: '2.1s',
    spawnRate: '2.05%', avgAccuracy: '34.26%', avgKillDistance: '8.64m', img: 'assets/weapons/PISTOLS/Item_Weapon_M1911_C.png'
  },
  {
    weapon: 'P92', baseDamage: '35', fireRate: '0.09s', reloadDuration: '2s',
    spawnRate: '2.55%', avgAccuracy: '34.52%', avgKillDistance: '9.64m', img: 'assets/weapons/PISTOLS/Item_Weapon_M9_C.png'
  },
  {
    weapon: 'R1895', baseDamage: '55', fireRate: '0.4s', reloadDuration: '6.25s',
    spawnRate: '2.23%', avgAccuracy: '44.47%', avgKillDistance: '5.04m', img: 'assets/weapons/PISTOLS/Item_Weapon_NagantM1895_C.png'
  },
  {
    weapon: 'R45', baseDamage: '55', fireRate: '0.25s', reloadDuration: '3.2s',
    spawnRate: '0.61%', avgAccuracy: '42.27%', avgKillDistance: '13.8m', img: 'assets/weapons/PISTOLS/Item_Weapon_Rhino_C.png'
  },
  {
    weapon: 'Skorpion', baseDamage: '22', fireRate: '0.07s', reloadDuration: '3.1s',
    spawnRate: '0.4%', avgAccuracy: '27.78%', avgKillDistance: '9.83m', img: 'assets/weapons/PISTOLS/Item_Weapon_vz61Skorpion_C.png'
  },
];
