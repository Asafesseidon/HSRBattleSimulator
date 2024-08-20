const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

function basicControls(value, characterId){

    var characterId = document.getElementById("currentCharacter");

    if (value == 'skill'){

        Skill(characterId);
    }

    else if (value == 'basicAttack'){

        BasicAttack(characterId);
    }
}


//BaseDMG Formula

function BaseDMG(atkScale){

    var ATK = (AttackCharacter + AttackWeapon) * (1 + AttackBonus) + FlatAttack;
    var DEF = (DefenseCharacter + DefenseWeapon) * (1 + DefenseBonus) + FlatDefense;
    var MaxHP = (HealthCharacter + HealthWeapon) * (1 + HealthBonus) + FlatHealth;


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
        var AverageCrit = 1 + criT * CRITDamage;
        var CRIT = AverageCrit;
    }

    return CRIT;
}
    
//DMG% Multiplier
function DMGPercentMultiplier(ElementalDmgPercentage, AllTypeDmgPercent, DoTDmgPercent){

    var dmgPercentMultiplier = 1 + ElementalDmgPercentage + AllTypeDmgPercent + DoTDmgPercent;

    return dmgPercentMultiplier;
}

//DEF Multiplier Formula

function DEFMultiplier(levelCharacter, levelEnemy){

    var defMultiplier = levelCharacter +20/(levelEnemy +20)+(levelCharacter +20);

    return defMultiplier;
}


//Res Multiplier Formula

function RESMultiplier(resPercentage, resPenPercentage){

    var resMultiplier = 100% - (resPercentage - resPenPercentage);

    return resMultiplier;
}

//Vulnerability Formula

function VulnerabilityMultiplier(ElementalVulnerabilityPercentage, AllTypeVulnerabilityPercentage){

    var vulnerabilityMultiplier = 1 + ElementalVulnerabilityPercentage + AllTypeVulnerabilityPercentage; 

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

function GeneralDMG(atkScale, CRITRate, CritDamage, ElementDmgPercent,
    AllTypeDmgPercent, DoTDmgPercent,
    levelCharacter, levelEnemy, resPercent,
    resPenPercent, ElementVulnPercent, AllTypeVulnPercent){

    var part1 = new BaseDMG(atkScale) * new Crit(CRITRate, CritDamage);

    var part2 = new DMGPercentMultiplier(ElementDmgPercent, AllTypeDmgPercent, DoTDmgPercent) * new DEFMultiplier(levelCharacter, levelEnemy);

    var part3 = new RESMultiplier(resPercent, resPenPercent) * new VulnerabilityMultiplier(ElementVulnPercent,  AllTypeVulnPercent) * new BrokenMultiplier();

    var Damage = part1  * part2 * part3;

    return Damage;
}


//Break DMG Formula

function BreakDMG(atkScale, breakEffect, levelCharacter, levelEnemy, resPercent, resPenPercent, ElementVulnPercent, AllTypeVulnPercent) {

    var part1 = new BaseDMG(atkScale) * (1 + breakEffect) * new DEFMultiplier(levelCharacter, levelEnemy);
    
    var part2 = new RESMultiplier(resPercent, resPenPercent) * new VulnerabilityMultiplier(ElementVulnPercent, AllTypeVulnPercent) * new BrokenMultiplier();

    var breakDamage = part1 * part2;

    return breakDamage;
}

//SuperBreak DMG Formula

function SuperBreakDMG(LevelMultiplier, toughnessReduction, breakEffect, superBreakDmgIncrease, levelCharacter, levelEnemy, resPercent, resPenPercent, ElementVulnPercent, AllTypeVulnPercent) {

    var part1 = LevelMultiplier * (toughnessReduction/10) * (1 + breakEffect);

    var part2 = (1 + superBreakDmgIncrease) * new DEFMultiplier(levelCharacter, levelEnemy);

    var part3 = new RESMultiplier(resPercent, resPenPercent) * new VulnerabilityMultiplier(ElementVulnPercent, AllTypeVulnPercent);

    var superBreakDamage = part1 * part2 * part3;

    return superBreakDamage;
}

function turnOrder(actionGauge, CurrentAV){

    var turnOrderValue = 10000;

    if (actionGauge == 0 || CurrentAV == 0){

        var currentCharacterTurn = 'now';
    }

}

function AdvanceForwardActionDelay(actionGauge, advanceForwardPercent, advanceForwardPercent, actionDelayPercent){
    
    actionGauge = actionGauge - (advanceForwardPercent - actionDelayPercent) * 10000;
    
    return actionGauge;
}

function ToughnessBreakDelay(actionGauge){

    actionGauge = actionGauge - ( 0 - 25%actionGauge) * 10000;

    if (toughnessBreak == 'imaginary'){

        var actionDelayPercent = 30%(1 + breakEffect);

        AdvanceForwardActionDelay(actionGauge, 0, actionDelayPercent);

    }

    else if (toughnessBreak == 'quantum'){

        var actionDelayPercent = 20%(1 + breakEffect);

        AdvanceForwardActionDelay(actionGauge, 0, actionDelayPercent);

    }

    else if (toughnessBreak == 'ice'){

        //Lose a turn

        AdvanceForwardActionDelay(actionGauge, 50, 0);
    }
}

function ActionValue(currentSpeed, actionGauge){

    speed(speed, speedBuff, speedBuffPercent, currentSpeed);
    var CurrentAV = actionGauge / currentSpeed;


    if (actionGauge == 0){

        var consumedAV = 0 - CurrentAV;
        CurrentAV= CurrentAV - consumedAV;
    }

    return CurrentAV;
}

function Speed(speed, speedBuff, speedBuffPercent, currentSpeed){
    
    if (currentSpeed == speed){
        var loopSpeed = currentSpeed;
        var currentSpeed = loopSpeed + (speedBuffPercent * speed);
        currentSpeed = currentSpeed + speedBuff;

        currentSpeed = loopSpeed / currentSpeed;

    }

    return currentSpeed;
    
}
