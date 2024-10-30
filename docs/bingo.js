var items = {
  "onePointItems": [
    {
    "text": "Oh God",
    "guest": false,
    "points": 1
  },
  {
    "text": "Shonky",
    "guest": false,
    "points": 1
  },
  {
    "text": "What was I talking about?",
    "guest": false,
    "points": 1
  },
  {
    "text": "Big Face",
    "guest": false,
    "points": 1
  },
  {
    "text": "HS2",
    "guest": false,
    "points": 1
  },
  {
    "text": "It's All Good",
    "guest": false,
    "points": 1
  },
  {
    "text": "As the Intercity 225 fades out...",
    "guest": false,
    "points": 1
  },
  {
    "text": "Hooray!",
    "guest": false,
    "points": 1
  },
  {
    "text": "Mild surprise at the number of episodes",
    "guest": false,
    "points": 1
  },
  {
    "text": "Big sigh / breathe",
    "guest": false,
    "points": 1
  },
  {
    "text": "Thing's are happening!",
    "guest": false,
    "points": 1
  },
  {
    "text": "Let's get out / my face out of here / up here",
    "guest": false,
    "points": 1
  },
  {
    "text": "Gareth is late",
    "guest": false,
    "points": 1
  },
  {
    "text": "Gareth mentions the Wacom",
    "guest": false,
    "points": 1
  },
  {
    "text": "That's interesting",
    "guest": false,
    "points": 1
  },
  {
    "text": "Something breaks / Generic technical difficulties",
    "guest": false,
    "points": 1
  },
  {
    "text": "Exciting",
    "guest": false,
    "points": 1
  },
  {
    "text": "Oh, really?",
    "guest": false,
    "points": 1
  },
  {
    "text": "Err... Yes... / Err... No...",
    "guest": false,
    "points": 1
  }],
  "twoPointItems": [
    {
    "text": "Discussion of what Gareth is drinking",
    "guest": false,
    "points": 2
  },
  {
    "text": "General OBS issues",
    "guest": false,
    "points": 2
  },
  {
    "text": "Gareth describes old episodes \\ this episode as 'unprofessional'",
    "guest": false,
    "points": 2
  },
  {
    "text": "Gareth sarcastically describes the current episode as 'professional'",
    "guest": false,
    "points": 2
  },
  {
    "text": "That's exciting",
    "guest": false,
    "points": 2
  },
  {
    "text": "Oh! [Well that's] Interesting!",
    "guest": false,
    "points": 2
  },
  {
    "text": "Gareth waves (not at the end of the video)",
    "guest": false,
    "points": 2
  },
  {
    "text": "Comments about how old the British system is",
    "guest": false,
    "points": 2
  }],
  "threePointItems": [
    {
      "text": "Discussion of what the guest is drinking",
      "guest": true,
      "points": 3
    },
    {
      "text": "Gadgetbahn",
      "guest": false,
      "points": 3
    },
    {
      "text": "Well There's Your Problem mentioned",
      "guest": false,
      "points": 3
    },
    {
      "text": "Fucking Magic/FM Technology",
      "guest": false,
      "points": 3
    },
    {
      "text": "Rolling programmes are good",
      "guest": false,
      "points": 3
    },
    {
      "text": "Crossrail (Elizabeth Line) mentioned",
      "guest": false,
      "points": 3
    },
    {
      "text": "COVID mentioned",
      "guest": false,
      "points": 3
    },
    {
      "text": "Gareth messes up the intro",
      "guest": false,
      "points": 3
    },
    {
      "text": "Tim Dunn",
      "guest": false,
      "points": 3
    },
    {
      "text": "Commentary about something silly the government has done",
      "guest": false,
      "points": 3
    }
  ],
  "fourPointItems": [
    {
      "text": "Electrify all the things",
      "guest": false,
      "points": 4
    },
    {
      "text": "Beeching / Reverse Beeching / Marples",
      "guest": false,
      "points": 4
    },
    {
      "text": "Direct trains to London / Doesn't need to go via London",
      "guest": false,
      "points": 4
    },
    {
      "text": "Spanners are mentioned",
      "guest": false,
      "points": 4
    },
    {
      "text": "Vauge insults / justiculations twards CAM / Hyperloop / Musk / FM tech",
      "guest": false,
      "points": 4
    }
  ],
  "fivePointItems": [
    {
      "text": "Abolish the Treasury",
      "guest": false,
      "points": 5
    },
    {
      "text": "Photo of the Selby Diversion / Coulton Junction",
      "guest": false,
      "points": 5
    },
    ,
    {
      "text": "Something to do with audio mess ups",
      "guest": false,
      "points": 5
    },
    {
      "text": "Chat tries to talk to Gareth on a pre-recorded show",
      "guest": false,
      "points": 5
    }
  ]
}

var accessibleMode = false;

var score = 0;

function GenerateGrid() {
  var finalGrid = [];
  GetNRandom(6, items.onePointItems).forEach(i => {finalGrid.push(i);});
  GetNRandom(4, items.twoPointItems).forEach(i => {finalGrid.push(i);});
  GetNRandom(3, items.threePointItems).forEach(i => {finalGrid.push(i);});
  GetNRandom(2, items.fourPointItems).forEach(i => {finalGrid.push(i);});
  GetNRandom(1, items.fivePointItems).forEach(i => {finalGrid.push(i);});
  finalGrid = finalGrid.sort(() => 0.5-Math.random());
  var row = 0;
  var button = 0;
  Matrix(finalGrid, 4,4).forEach(gridRow => {
    document.getElementById("game").innerHTML+=(`<div class="grid grid-cols-1 lg:grid-cols-4" id="${row}"></div>`);
    gridRow.forEach(gridButton => {
      document.getElementById(row).innerHTML+=`<button id="button${button}" onclick='UpdateScore(${button}, ${gridButton.points})' class='border border-railnatter border-solid rounded p-5 m-2 hover:bg-railnatter hover:text-white text-base md:text-xl''>${gridButton.text}</button>`;
      button++;
    });
    row++;
  });
}

function UpdateScore(button, pointValue)
{
  score += pointValue;
  document.getElementById('score').innerHTML = score;
  var btn = document.getElementById(`button${button}`);
  btn.classList.add("bg-railnatter");
  btn.classList.add("text-white");
  btn.onclick = function() {};
}

function GetNRandom(number, array)
{
  const shuffled = array.sort(() => 0.5 - Math.random());
  if(!this.guestMode)
  {
    shuffled.forEach(items => {
      if(items.guest)
      {
        delete shuffled[items];
      }
    });
  }
  return shuffled.slice(0, number);
}

function Matrix(arr, rows, cols) {
  var matrix = [];
  if (rows * cols === arr.length) {
      for(var i = 0; i < arr.length; i+= cols) {
          matrix.push(arr.slice(i, cols + i));
      }
  }
  return matrix;
}

function RedrawGrid()
{
  document.getElementById('game').innerHTML = "";
  score = 0;
  document.getElementById('score').innerHTML = score;
  GenerateGrid();
}

function ToggleAccessabilityMode()
{
  accessibleMode = !accessibleMode;
  document.querySelectorAll('*').forEach(function(node) {
    if(accessibleMode) {
      node.style.fontFamily = "sans-serif";
    }
    else {
      node.style.fontFamily = "appleberry";
      node.classList.add('font-railnatter');
    }
  });
  let docroot = document.getElementById("docroot");
  if(accessibleMode) {
    docroot.classList.remove("bg-railnatter-bright");
    docroot.classList.add("bg-railnatter-muted");
  }
  else {
    docroot.classList.remove("bg-railnatter-muted");
    docroot.classList.add("bg-railnatter-bright");
  }
}

window.onload = GenerateGrid();


