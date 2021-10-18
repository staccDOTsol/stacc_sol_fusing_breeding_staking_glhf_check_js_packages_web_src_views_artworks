import os
import shutil
import random
import json
count = 0
theclass = "progenitor"
#nft #game $sol

jobs = [{      "soldier": ""  }, {     "medic": "" }, {     "knight": [{         "soldier": 2      }] }, {     "archer": [{         "soldier": 2    }] }, {     "monk": [{        "knight": 2    }] }, {     "samurai": [{        "knight": 3    }, {        "lancer": 2    }, {        "monk": 4      }] }, {     "lancer": [{         "thief": 3     }] }, {     "dancer": [{         "lancer": 4    }, {        "geomancer": 4    }] }, {     "geomancer": [{         "monk": 3      }] }, {     "ninja": [{       "archer": 3    }, {        "thief": 4     }] }, {     "thief": [{       "archer": 2    }] }, {     "mime": [{        "medic": 8    }, {        "soldier": 8      }, {        "lancer": 4    }, {        "geomancer": 4    }, {        "summmoner": 4    }, {        "mediator": 4     }] }, {     "white mage": [{        "medic": 2     }] }, {     "black mage": [{        "medic": 2     }] }, {     "time mage": [{         "wizard": 2    }] }, {     "oracle": [{         "white mage": 2      }] }, {     "calculator": [{        "white mage": 4      }, {        "black mage": 4      }, {        "time mage": 3    }, {        "oracle": 3    }] }, {     "bard": [{        "summoner": 4     }, {        "mediator": 4     }] }, {     "summoner": [{       "time mage": 2    }] }, {     "mediator": [{       "oracle": 2    }] }]

gender = "male"
level = 1
basehp = [491520,524287]
basemp = [229376,245759]
exp = [100, 1000]
jp = [1, 3]
physattk = [1,10]
magattk = [1,10]
physdef = [1,5]
magdef = [1,5]
speed = [1,5]
move = [1,15]
jump = [3, 5]
physevade = [10, 35]
magevade = [5, 60]
physacc = [40, 60]
magacc = [20, 70]
stam = [1,20]
luck = [5,45]
vitality = [10, 30]


abc = 0

while count < 10000:
      #if ('png' in name):
         try:
            shutil.copy(str(abc) + '.png', str(count) + '.png')
         except:
            abc2=123
         job = ['medic', 'soldier'][abc]
         abc = abc + 1
         if abc >= 2:
            abc = 0
         basehp1 = str(random.randint(basehp[0], basehp[1]))
         basemp1 = str(random.randint(basemp[0], basemp[1]))
         level1 = 1
         exp1 = str(random.randint(exp[0], exp[1]))
         jp1 = str(random.randint(jp[0], jp[1]))
         physattk1 = str(random.randint(physattk[0], physattk[1]))
         magattk1 = str(random.randint(magattk[0], magattk[1]))
         physdef1 = str(random.randint(physdef[0], physdef[1]))
         magdef1 = str(random.randint(magdef[0], magdef[1]))
         speed1 = str(random.randint(speed[0], speed[1]))
         move1 = str(random.randint(move[0], move[1]))
         jump1 = str(random.randint(jump[0], jump[1]))
         physevade1 =  str(random.randint(physevade[0], physevade[1]))
         magevade1 = str(random.randint(magevade[0], magevade[1]))
         physacc1 = str(random.randint(physacc[0], physacc[1]))
         magacc1 = str(random.randint(magacc[0], magacc[1]))
         stam1 = str(random.randint(stam[0], stam[1]))
         luck1 = str(random.randint(luck[0], luck[1]))
         vitality1 = str(random.randint(vitality[0], vitality[1]))
         ajson = '{  "name": "Male Progenitor ' + str(count) + '",  "symbol": "STACC",   "description": "",   "seller_fee_basis_points": 0, "image": "image.png",   "attributes": [{     "trait_type": "Job",     "value": "' + job + '"   }, {     "trait_type": "Base HP",      "value": "' + basehp1 + '" }, {     "trait_type": "Base MP",      "value": "' + basemp1 + '" }, {     "trait_type": "Experience Points",     "value": "' + exp1 + '" }, {     "trait_type": "Job Points",      "value": "' + jp1 + '"  }, {     "trait_type": "Physical Accuracy",     "value": "' + physacc1 + '"   }, {     "trait_type": "Magical Accuracy",      "value": "' + magacc1 + '" }, {     "trait_type": "Physical Attack",    "value": "' + physattk1 + '"  }, {     "trait_type": "Magical Attack",     "value": "' + magattk1 + '"   }, {     "trait_type": "Physical Evade",     "value": "' + physevade1 + '" }, {     "trait_type": "Magical Evade",      "value": "' + magevade1 + '"  }, {     "trait_type": "Magical Defense",    "value": "' + magdef1 + '" }, {     "trait_type": "Physical Defense",      "value": "' + physdef1 + '"   }, {     "trait_type": "Speed",     "value": "' + speed1 + '"  }, {     "trait_type": "Movement",     "value": "' + move1 + '"   }, {     "trait_type": "Jump",      "value": "' + jump1 + '"   }, {     "trait_type": "Stamina",      "value": "' + stam1 + '"   }, {     "trait_type": "Luck",      "value": "' + luck1 + '"   }, {     "trait_type": "Vitality",     "value": "' + vitality1 + '"  }],   "collection": {      "name": "STacc",      "family": "STacc" }, "properties": {      "category": "characters"   }}'
         with open (str(count) + '.json', 'w') as f:
            f.write(ajson)
         count = count + 1