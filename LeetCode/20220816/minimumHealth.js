/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
 var minimumHealth = function(damage, armor) {
    let max = 0;
    let total = 0;
    damage.forEach( p => {
        max = Math.max(p, max)
        total += p;
    })
    return (total - Math.min(max,armor) + 1 )
};

var mhCross = function(damage, armor) {
    totalDamage = damage.reduce((p, c) => p + c, 0);
    damage = damage.sort((a, b) => b - a )

    if( damage[0] >= armor )
        totalDamage = totalDamage - armor
    else 
        totalDamage = totalDamage - damage[0]

    return totalDamage+1
}

module.exports = minimumHealth