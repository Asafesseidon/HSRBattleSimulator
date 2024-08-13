var atkScale = 'atk';


const clamp = (val, min, max) => Math.min(Math.max(val, min), max);


//BaseDMG Formula

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

//CRIT Formula

if (hitIsCrit){

}
else{
    
}
var CRIT = 1 + CRITDamage;
var CRIT = AverageCrit= 1 +  clamp(0%, CRITRate, 100%) * CRITDamage;

//General DMG Formula

var Damage= BaseDMG * CRIT * DMGPercentMultiplier * DEFMultiplier * RESMultiplier * DMGTakenMultiplier * ToughnessMultiplier;
