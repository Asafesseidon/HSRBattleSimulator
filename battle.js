
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

function basicControls(value){

    var characterId = document.getElementById("currentCharacter");

    if (value == 'skill'){

        
    }

    else if (value == 'basicAttack'){

    }
}


//BaseDMG Formula

function BaseDMG(atkScale){

    var ATK= (AttackCharacter + AttackWeapon) * (1 + AttackBonus) + FlatAttack;
    var DEF= (DefenseCharacter + DefenseWeapon) * (1 + DefenseBonus) + FlatDefense;
    var MaxHP= (HealthCharacter + HealthWeapon) * (1 + HealthBonus) + FlatHealth;


    if (atkScale == 'atk'){

        var BaseDMG=(SkillMV + ExtraMV) * ATK + ExtraDMG;
    }

    if (atkScale == 'def'){

        var BaseDMG=(SkillMV + ExtraMV) * DEF + ExtraDMG;
    }

    if (atkScale == 'hp'){

        var BaseDMG=(SkillMV + ExtraMV) * MaxHP + ExtraDMG;
    }

    return BaseDMG;
}

//CRIT Formula
function Crit(CRITRate, CRITDamage){


    if (hitIsCrit){

        var CRIT = 1 + CRITDamage;
    }
    else{
        var criT = clamp(CRITRate, 0, 100);
        var AverageCrit= 1 + criT * CRITDamage;
        var CRIT = AverageCrit;
    }

    return CRIT;
}
    
//DMG% Multiplier
function DMGPercentMultiplier(ElementalDmgPercentage, AllTypeDmgPercent, DoTDmgPercent){

    var dmgPercentMultiplier= 1 + ElementalDmgPercentage + AllTypeDmgPercent + DoTDmgPercent;

    return dmgPercentMultiplier;
}

//DEF Multiplier Formula

function DEFMultiplier(levelCharacter, levelEnemy){

    var defMultiplier= levelCharacter +20/(levelEnemy +20)+(levelCharacter +20);

    return defMultiplier;
}


//Res Multiplier Formula

function RESMultiplier(resPercentage, resPenPercentage){

    var resMultiplier= 100% - (resPercentage - resPenPercentage);

    return resMultiplier;
}

//Vulnerability Formula

function VulnerabilityMultiplier(ElementalVulnerabilityPercentage, AllTypeVulnerabilityPercentage){

    var vulnerabilityMultiplier= 1 + ElementalVulnerabilityPercentage + AllTypeVulnerabilityPercentage; 

    return vulnerabilityMultiplier;
}

//Toughness

function BrokenMultiplier(){

    var enemyIsBroken = document.getElementById('targetEnemyStatus');
    if (enemyIsBroken != 0){

    var brokenMultiplier = 0.9;
    }

    else{
        var brokenMultiplier = 1;
    }

    return brokenMultiplier;
}

//General DMG Formula

function GeneralDMG(atkScale, CRITRate, CritDamage, ElementDmgPercent, AllTypeDmgPercent, DoTDmgPercent, levelCharacter, levelEnemy, resPercent, resPenPercent, ElementVulnPercent, AllTypeVulnPercent){

    var Damage= new BaseDMG(atkScale) * new Crit(CRITRate, CritDamage) * DMGPercentMultiplier(ElementDmgPercent, AllTypeDmgPercent, DoTDmgPercent) * new DEFMultiplier(levelCharacter, levelEnemy) * new RESMultiplier(resPercent, resPenPercent) * new VulnerabilityMultiplier(ElementVulnPercent,  AllTypeVulnPercent) * new BrokenMultiplier();

    return Damage;
}


//Break DMG Formula

function BreakDMG(atkScale, breakEffect, levelCharacter, levelEnemy, resPercent, resPenPercent, ElementVulnPercent, AllTypeVulnPercent) {

    var breakDamage= new BaseDMG(atkScale) * (1 + breakEffect) * new DEFMultiplier(levelCharacter, levelEnemy) * new RESMultiplier(resPercent, resPenPercent) * new VulnerabilityMultiplier(ElementVulnPercent, AllTypeVulnPercent) * new BrokenMultiplier();

    return breakDamage;
}

//SuperBreak DMG Formula

function SuperBreakDMG(LevelMultiplier, toughnessReduction, breakEffect, superBreakDmgIncrease, levelCharacter, levelEnemy, resPercent, resPenPercent, ElementVulnPercent, AllTypeVulnPercent) {

    var superBreakDamage= LevelMultiplier * (toughnessReduction/10) * (1 + breakEffect) * (1 + superBreakDmgIncrease) * new DEFMultiplier(levelCharacter, levelEnemy) * new RESMultiplier(resPercent, resPenPercent) * new VulnerabilityMultiplier(ElementVulnPercent, AllTypeVulnPercent);

    return superBreakDamage;
}
