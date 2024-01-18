const snowflakes = [];

for (let i = 0; i < 300; i++) {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.style.left = `${Math.random() * 100}%`;
  snowflake.style.top = `${Math.random() * 100}%`;
  snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
  snowflakes.push(snowflake);
}

const snowflakesContainer = document.getElementById('snowflakes');
snowflakes.forEach((snowflake) => snowflakesContainer.appendChild(snowflake));
