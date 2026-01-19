/**
 * NutriPlan - Main Entry Point
 *
 * This is the main entry point for the application.
 * Import your modules and initialize the app here.
 */


display();
function display() {
  const searchSection = document.getElementById("search-filters-section");
  const mealCategoriesSection = document.getElementById(
    "meal-categories-section",
  );
  const allRecipesSection = document.getElementById("all-recipes-section");
  const mealDetailsSection = document.getElementById("meal-details");
  const productsSection = document.getElementById("products-section");
  const foodLogSection = document.getElementById("foodlog-section");

  function hideAllSections() {
    searchSection.classList.add("hidden");
    mealCategoriesSection.classList.add("hidden");
    allRecipesSection.classList.add("hidden");
    mealDetailsSection.classList.add("hidden");
    productsSection.classList.add("hidden");
    foodLogSection.classList.add("hidden");
  }

  document.getElementById("mealsLink").addEventListener("click", () => {
    hideAllSections();
    allRecipesSection.classList.remove("hidden");
    searchSection.classList.remove("hidden");
    mealCategoriesSection.classList.remove("hidden");
    headerTitle(
      "Meals & Recipes",
      "Discover delicious and nutritious recipes tailored for you",
    );
    closeSidebar();
  });

  document.getElementById("productsLink").addEventListener("click", () => {
    hideAllSections();
    productsSection.classList.remove("hidden");
    headerTitle("Product Scanner", "Search packaged foods by name or barcode");
    closeSidebar();
  });

  document.getElementById("foodLogLink").addEventListener("click", () => {
    hideAllSections();
    foodLogSection.classList.remove("hidden");
    headerTitle("Food Log", "Track your daily nutrition and food intake");
    closeSidebar();
  });
}

toggleActiveLink();
function toggleActiveLink() {
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((active) => {
        active.classList.remove("bg-emerald-50", "text-emerald-700");
        active.classList.add("text-gray-600");
      });
      link.classList.add("bg-emerald-50", "text-emerald-700");
      link.classList.remove("text-gray-600");
    });
  });
}

Lodingall();
function Lodingall() {
  const loadingOverlay = document.getElementById("app-loading-overlay");
  function showLoader() {
    loadingOverlay.style.display = "flex";
    loadingOverlay.style.opacity = "1";
  }
  showLoader();
  function hideLoader() {
    loadingOverlay.style.transition = "opacity 0.5s";
    loadingOverlay.style.opacity = "0";
    setTimeout(() => {
      loadingOverlay.style.display = "none";
    }, 500);
  }

  window.addEventListener("load", () => {
    hideLoader();
  });
}

HamburgerMenu();
function HamburgerMenu() {
  const menuBtn = document.getElementById("header-menu-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const closeBtn = document.getElementById("sidebar-close-btn");

  menuBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    sidebar.classList.add("open");
  });
  overlay.addEventListener("click", () => {
    closeSidebar();
  });
  closeBtn.addEventListener("click", () => {
    closeSidebar();
  });
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  sidebar.classList.remove("open");
  overlay.classList.remove("active");
}

function headerTitle(titleText, descText) {
  const header = document.getElementById("header-title");
  const h1 = header.querySelector("h1");
  const p = header.querySelector("p");

  h1.textContent = titleText;
  p.textContent = descText;
}

createCategoryCards();
function createCategoryCards() {
  const akel = document.getElementById("categories-grid");

  const categoriesData = [
    "Beef",
    "Chicken",
    "Dessert",
    "Lamb",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
    "Vegan",
    "Vegetarian",
  ];

  const categories = {
    Beef: {
      bg: "from-red-50 to-rose-50",
      border: "border-red-200 hover:border-red-400",
      iconFrom: "from-red-400",
      iconTo: "to-rose-500",
    },
    Chicken: {
      bg: "from-amber-50 to-orange-50",
      border: "border-amber-200 hover:border-amber-400",
      iconFrom: "from-amber-400",
      iconTo: "to-orange-500",
    },
    Dessert: {
      bg: "from-pink-50 to-rose-50",
      border: "border-pink-200 hover:border-pink-400",
      iconFrom: "from-pink-400",
      iconTo: "to-rose-500",
    },
    Lamb: {
      bg: "from-orange-50 to-amber-50",
      border: "border-orange-200 hover:border-orange-400",
      iconFrom: "from-orange-400",
      iconTo: "to-amber-500",
    },
    Pasta: {
      bg: "from-yellow-50 to-amber-50",
      border: "border-yellow-200 hover:border-yellow-400",
      iconFrom: "from-yellow-400",
      iconTo: "to-amber-500",
    },
    Pork: {
      bg: "from-rose-50 to-red-50",
      border: "border-rose-200 hover:border-rose-400",
      iconFrom: "from-rose-400",
      iconTo: "to-red-500",
    },
    Seafood: {
      bg: "from-cyan-50 to-blue-50",
      border: "border-cyan-200 hover:border-cyan-400",
      iconFrom: "from-cyan-400",
      iconTo: "to-blue-500",
    },
    Side: {
      bg: "from-green-50 to-emerald-50",
      border: "border-green-200 hover:border-green-400",
      iconFrom: "from-green-400",
      iconTo: "to-emerald-500",
    },
    Starter: {
      bg: "from-teal-50 to-cyan-50",
      border: "border-teal-200 hover:border-teal-400",
      iconFrom: "from-teal-400",
      iconTo: "to-cyan-500",
    },
    Vegan: {
      bg: "from-emerald-50 to-green-50",
      border: "border-emerald-200 hover:border-emerald-400",
      iconFrom: "from-emerald-400",
      iconTo: "to-green-500",
    },
    Vegetarian: {
      bg: "from-lime-50 to-green-50",
      border: "border-lime-200 hover:border-lime-400",
      iconFrom: "from-lime-400",
      iconTo: "to-green-500",
    },
    Breakfast: {
      bg: "from-amber-50 to-orange-50",
      border: "border-amber-200 hover:border-amber-400",
      iconFrom: "from-amber-400",
      iconTo: "to-orange-500",
    },
    Miscellaneous: {
      bg: "from-slate-50 to-gray-50",
      border: "border-slate-200 hover:border-slate-400",
      iconFrom: "from-slate-400",
      iconTo: "to-gray-500",
    },
  };

  const icons = {
    Beef: "fa-drumstick-bite",
    Chicken: "fa-drumstick-bite",
    Dessert: "fa-cake-candles",
    Lamb: "fa-drumstick-bite",
    Pasta: "fa-bowl-food",
    Pork: "fa-bacon",
    Seafood: "fa-fish",
    Side: "fa-plate-wheat",
    Starter: "fa-utensils",
    Vegan: "fa-leaf",
    Vegetarian: "fa-seedling",
    Breakfast: "fa-mug-hot",
    Goat: "fa-drumstick-bite",
    Miscellaneous: "fa-bowl-rice",
  };

  let box = "";

  for (let i = 0; i < categoriesData.length; i++) {
    const catName = categoriesData[i];
    const cat = categories[catName];
    const iconClass = icons[catName];

    box += `
     <div class="category-card bg-gradient-to-br ${cat.bg} rounded-xl p-3 border ${cat.border} hover:shadow-md cursor-pointer transition-all group" data-category="${catName}"> 
     <div class="flex items-center gap-2.5"> 
     <div class="w-9 h-9 bg-gradient-to-br ${cat.iconFrom} ${cat.iconTo} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm"> 
     <i class="fa-solid ${iconClass} text-white text-sm"></i> 
     </div> <div> <h3 class="text-sm font-bold text-gray-900">${catName}</h3> </div> </div> </div> `;
  }
  akel.innerHTML = box;
}

createAreaButtons();
async function createAreaButtons() {
  const areasContainer = document.getElementById("areas");
  const areasAPI = "https://nutriplan-api.vercel.app/api/meals/areas";

  try {
    const response = await fetch(areasAPI);
    const data = await response.json();
    const areasData = data.results || [];

    let box = `
      <button data-area="all"
        class="area-filter-btn px-4 py-2 bg-emerald-600 text-white rounded-full font-medium text-sm whitespace-nowrap hover:bg-emerald-700 transition-all">
        All Cuisines
      </button>
    `;

    for (let i = 0; i < areasData.length; i++) {
      box += `
        <button data-area="${areasData[i].name}"
          class="area-filter-btn px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-all">
          ${areasData[i].name}
        </button>
      `;
    }

    areasContainer.innerHTML = box;
  } catch {
    areasContainer.innerHTML =
      "<p class='text-red-500'>Failed to load areas</p>";
  }
}

loadRandomMeals();
async function loadRandomMeals() {
  const container = document.getElementById("recipes-grid");

  container.innerHTML = `
    <div class="flex items-center justify-center py-12">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
    </div>
  `;

  const allMeals = [];

  for (let i = 0; i < 5; i++) {
    try {
      const res = await fetch(
        "https://nutriplan-api.vercel.app/api/meals/random?count=3",
      );
      if (!res.ok) throw new Error("Failed to fetch random meals");
      const data = await res.json();
      allMeals.push(...data.results);
    } catch (err) {
      console.log(`Failed to load random meals batch ${i + 1}:`, err);
    }
  }

  container.innerHTML = "";

  for (let i = 0; i < allMeals.length; i++) {
    try {
      const mealId = allMeals[i].id;
      const mealRes = await fetch(
        `https://nutriplan-api.vercel.app/api/meals/${mealId}`,
      );
      if (!mealRes.ok) throw new Error(`Failed to fetch meal ${mealId}`);
      const mealData = await mealRes.json();
      const meal = mealData.result;

      container.innerHTML += `
        <div class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group" data-meal-id="${meal.id}">
          <div class="relative h-48 overflow-hidden">
          
            <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="${meal.thumbnail}" alt="${meal.name}" loading="lazy" />
            <div class="absolute bottom-3 left-3 flex gap-2">
              <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">${meal.category}</span>
              <span class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white">${meal.area}</span>
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">${meal.name}</h3>
            <p class="text-xs text-gray-600 mb-3 line-clamp-2">${meal.instructions}</p>
            <div class="flex items-center justify-between text-xs">
              <span class="font-semibold text-gray-900"><i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>${meal.category}</span>
              <span class="font-semibold text-gray-500"><i class="fa-solid fa-globe text-blue-500 mr-1"></i>${meal.area}</span>
            </div>
          </div>
        </div>
      `;
    } catch (err) {
      console.log(`Failed to load meal details for index ${i}:`, err);
    }
  }
}

initMealDetailsClick();
function initMealDetailsClick() {
  const grid = document.getElementById("recipes-grid");
  const allRecipes = document.getElementById("all-recipes-section");
  const categories = document.getElementById("meal-categories-section");
  const filters = document.getElementById("search-filters-section");
  const details = document.getElementById("meal-details");

  if (!grid || !details) return;

  grid.addEventListener("click", async (e) => {
    const card = e.target.closest(".recipe-card");
    if (!card) return;

    const mealId = card.dataset.mealId;
    if (!mealId) return;

    allRecipes?.classList.add("hidden");
    categories?.classList.add("hidden");
    filters?.classList.add("hidden");
    details.classList.remove("hidden");
    details.scrollIntoView({ behavior: "smooth" });

    details.innerHTML = `
      <div class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
      </div>
    `;

    try {
      const res = await fetch(
        `https://nutriplan-api.vercel.app/api/meals/${mealId}`,
      );
      if (!res.ok) throw new Error("Failed to fetch meal details");

      const data = await res.json();
      const meal = data.result;

      details.innerHTML = `
                 <!-- Back Button -->
          <button
            id="back-to-meals-btn"
            class="flex items-center gap-2 text-gray-600 hover:text-emerald-600 font-medium mb-6 transition-colors"
          >
            <i class="fa-solid fa-arrow-left"></i>
            <span>Back to Recipes</span>
          </button>

          <!-- Hero Section -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div class="relative h-80 md:h-96">
              <img
                src="${meal.thumbnail}"
                alt="${meal.name}"
                class="w-full h-full object-cover"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
              ></div>
              <div class="absolute bottom-0 left-0 right-0 p-8">
                <div class="flex items-center gap-3 mb-3">
                  <span
                    class="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full"
                    >${meal.category}</span
                  <span
                    class="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full"
                    >${meal.area}</span
                  >
                  <span
                    class="px-3 py-1 bg-purple-500 text-white text-sm font-semibold rounded-full"
                    >Casserole</span
                  >
                </div>
                <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
                  ${meal.name}
                </h1>
                <div class="flex items-center gap-6 text-white/90">
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-clock"></i>
                    <span>30 min</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-utensils"></i>
                    <span id="hero-servings">4 servings</span>
                  </span>
                  <span class="flex items-center gap-2">
                    <i class="fa-solid fa-fire"></i>
                    <span id="hero-calories">485 cal/serving</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap gap-3 mb-8">
            <button
              id="log-meal-btn"
              class="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
              data-meal-id="52772"
            >
              <i class="fa-solid fa-clipboard-list"></i>
              <span>Log This Meal</span>
            </button>
          </div>

          <!-- Main Content Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Left Column - Ingredients & Instructions -->
            <div class="lg:col-span-2 space-y-8">
              <!-- Ingredients -->
              <div class="bg-white rounded-2xl shadow-lg p-6">
                <h2
                  class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                >
                  <i class="fa-solid fa-list-check text-emerald-600"></i>
                  Ingredients
                  <span class="text-sm font-normal text-gray-500 ml-auto"
                    >9 items</span
                  >
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900">3/4 cup</span> soy
                      sauce
                    </span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900">1/2 cup</span>
                      water
                    </span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900">1/4 cup</span>
                      brown sugar
                    </span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900"
                        >1/2 teaspoon</span
                      >
                      ground ginger
                    </span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900"
                        >1/2 teaspoon</span
                      >
                      minced garlic
                    </span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900"
                        >4 Tablespoons</span
                      >
                      cornstarch
                    </span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900">2</span> chicken
                      breasts
                    </span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900">1 bag</span>
                      stir-fry vegetables
                    </span>
                  </div>
                  <div
                    class="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      class="ingredient-checkbox w-5 h-5 text-emerald-600 rounded border-gray-300"
                    />
                    <span class="text-gray-700">
                      <span class="font-medium text-gray-900">3 cups</span>
                      brown rice
                    </span>
                  </div>
                </div>
              </div>

              <!-- Instructions -->
              <div class="bg-white rounded-2xl shadow-lg p-6">
                <h2
                  class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                >
                  <i class="fa-solid fa-shoe-prints text-emerald-600"></i>
                  Instructions
                </h2>
                <div class="space-y-4">
                  <div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0"
                    >
                      1
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2">
                      Preheat oven to 350° F. Spray a 9x13-inch baking pan with
                      non-stick spray.
                    </p>
                  </div>
                  <div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0"
                    >
                      2
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2">
                      Combine soy sauce, ½ cup water, brown sugar, ginger and
                      garlic in a small saucepan and cover. Bring to a boil over
                      medium heat. Remove lid and cook for one minute once
                      boiling.
                    </p>
                  </div>
                  <div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0"
                    >
                      3
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2">
                      Meanwhile, stir together the cornstarch and 2 tablespoons
                      of water in a separate dish until smooth. Once sauce is
                      boiling, add mixture to the saucepan and stir to combine.
                      Cook until the sauce starts to thicken then remove from
                      heat.
                    </p>
                  </div>
                  <div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0"
                    >
                      4
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2">
                      Place the chicken breasts in the prepared pan. Pour one
                      cup of the sauce over top of chicken. Place chicken in
                      oven and bake 35 minutes or until cooked through. Remove
                      from oven and shred chicken in the pan using two forks.
                    </p>
                  </div>
                  <div
                    class="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      class="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0"
                    >
                      5
                    </div>
                    <p class="text-gray-700 leading-relaxed pt-2">
                      *Meanwhile, steam the vegetables according to package
                      directions and stir together with the cooked brown rice.
                      Add the remaining sauce to the mixture and stir to
                      combine. Serve the chicken over the rice and veggie
                      mixture.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Video Section -->
              <div class="bg-white rounded-2xl shadow-lg p-6">
                <h2
                  class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                >
                  <i class="fa-solid fa-video text-red-500"></i>
                  Video Tutorial
                </h2>
                <div
                  class="relative aspect-video rounded-xl overflow-hidden bg-gray-100"
                >
                  <iframe
                    src="${meal.youtube}"
                    class="absolute inset-0 w-full h-full"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  >
                  </iframe>
                </div>
              </div>
            </div>

            <!-- Right Column - Nutrition -->
            <div class="space-y-6">
              <!-- Nutrition Facts -->
              <div class="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h2
                  class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                >
                  <i class="fa-solid fa-chart-pie text-emerald-600"></i>
                  Nutrition Facts
                </h2>
                <div id="nutrition-facts-container">
                  <p class="text-sm text-gray-500 mb-4">Per serving</p>

                  <div
                    class="text-center py-4 mb-4 bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl"
                  >
                    <p class="text-sm text-gray-600">Calories per serving</p>
                    <p class="text-4xl font-bold text-emerald-600">485</p>
                    <p class="text-xs text-gray-500 mt-1">Total: 1940 cal</p>
                  </div>

                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                        <span class="text-gray-700">Protein</span>
                      </div>
                      <span class="font-bold text-gray-900">42g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-emerald-500 h-2 rounded-full"
                        style="width: 84%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span class="text-gray-700">Carbs</span>
                      </div>
                      <span class="font-bold text-gray-900">52g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-blue-500 h-2 rounded-full"
                        style="width: 17%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-purple-500"></div>
                        <span class="text-gray-700">Fat</span>
                      </div>
                      <span class="font-bold text-gray-900">8g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-purple-500 h-2 rounded-full"
                        style="width: 12%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-orange-500"></div>
                        <span class="text-gray-700">Fiber</span>
                      </div>
                      <span class="font-bold text-gray-900">4g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-orange-500 h-2 rounded-full"
                        style="width: 14%"
                      ></div>
                    </div>

                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 rounded-full bg-pink-500"></div>
                        <span class="text-gray-700">Sugar</span>
                      </div>
                      <span class="font-bold text-gray-900">12g</span>
                    </div>
                    <div class="w-full bg-gray-100 rounded-full h-2">
                      <div
                        class="bg-pink-500 h-2 rounded-full"
                        style="width: 24%"
                      ></div>
                    </div>
                  </div>

                  <div class="mt-6 pt-6 border-t border-gray-100">
                    <h3 class="text-sm font-semibold text-gray-900 mb-3">
                      Vitamins & Minerals (% Daily Value)
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                      <div class="flex justify-between">
                        <span class="text-gray-600">Vitamin A</span>
                        <span class="font-medium">15%</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-600">Vitamin C</span>
                        <span class="font-medium">25%</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-600">Calcium</span>
                        <span class="font-medium">4%</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-600">Iron</span>
                        <span class="font-medium">12%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `;
    } catch (err) {
      details.innerHTML = `
        <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6">
          <p class="text-red-600 font-semibold">Filled page</p>
        </div>
      `;
    }
  });
}

Search();
function Search() {
  const input = document.getElementById("search-input");
  const grid = document.getElementById("recipes-grid");
  if (!input || !grid) return;

  let timer;

  input.addEventListener("input", function () {
    clearTimeout(timer);

    timer = setTimeout(async function () {
      const text = input.value.trim();

      if (!text) {
        grid.innerHTML = "";
        return;
      }

      grid.innerHTML = `
        <div class="col-span-full flex items-center justify-center py-12">
          <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
        </div>
      `;

      try {
        const url = `https://nutriplan-api.vercel.app/api/meals/search?q=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        const json = await res.json();

        const data =
          json.results || json.result || json.data || json.meals || [];

        if (!Array.isArray(data) || data.length === 0) {
          grid.innerHTML = `
            <div class="col-span-full text-center py-10 text-gray-600">
              No results found for "<strong>${text}</strong>"
            </div>
          `;
          return;
        }

        let box = "";
        for (let i = 0; i < data.length; i++) {
          const meal = data[i];

          box += `
            <div class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group" data-meal-id="${meal.id}">
              <div class="relative h-48 overflow-hidden">
                <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="${meal.thumbnail}" alt="${meal.name}" loading="lazy" />
                <div class="absolute bottom-3 left-3 flex gap-2">
                  <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">${meal.category}</span>
                  <span class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white">${meal.area}</span>
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">${meal.name}</h3>
                <p class="text-xs text-gray-600 mb-3 line-clamp-2">${meal.instructions}</p>
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-gray-900"><i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>${meal.category}</span>
                  <span class="font-semibold text-gray-500"><i class="fa-solid fa-globe text-blue-500 mr-1"></i>${meal.area}</span>
                </div>
              </div>
            </div>
          `;
        }

        grid.innerHTML = box;
      } catch (err) {
        console.log("search error", err);
        grid.innerHTML = `
          <div class="col-span-full text-center py-10 text-red-600 font-semibold">
            Error
          </div>
        `;
      }
    }, 400);
  });
}

initFilterCards();
function initFilterCards() {
  const catsGrid = document.getElementById("categories-grid");
  const recipesGrid = document.getElementById("recipes-grid");
  if (!catsGrid || !recipesGrid) return;

  catsGrid.addEventListener("click", async function (e) {
    const card = e.target.closest(".category-card");
    if (!card) return;

    const value = card.getAttribute("data-category");
    if (!value) return;

    recipesGrid.innerHTML = `
      <div class="col-span-full flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
      </div>
    `;

    try {
      const base = "https://nutriplan-api.vercel.app/api/meals/filter";

      const urls = [
        `${base}?category=${encodeURIComponent(value)}`,
        `${base}?c=${encodeURIComponent(value)}`,
        `${base}?area=${encodeURIComponent(value)}`,
        `${base}?a=${encodeURIComponent(value)}`,
      ];

      let data = [];

      for (let i = 0; i < urls.length; i++) {
        const res = await fetch(urls[i]);
        if (!res.ok) continue;

        const json = await res.json();
        const results = json.results;

        if (Array.isArray(results)) {
          data = results;
          break;
        }
      }

      if (!data || data.length === 0) {
        recipesGrid.innerHTML = `
          <div class="col-span-full text-center py-10 text-gray-600">
            we don't have any <strong>${value}</strong>
          </div>
        `;
        return;
      }

      let box = "";
      for (let i = 0; i < data.length; i++) {
        const meal = data[i];

        box += `
          <div class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group" data-meal-id="${meal.id}">
            <div class="relative h-48 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="${meal.thumbnail}" alt="${meal.name}" loading="lazy" />
              <div class="absolute bottom-3 left-3 flex gap-2">
                <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">${meal.category}</span>
                <span class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white">${meal.area}</span>
              </div>
            </div>

            <div class="p-4">
              <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">${meal.name}</h3>
              <p class="text-xs text-gray-600 mb-3 line-clamp-2">${meal.instructions}</p>
              <div class="flex items-center justify-between text-xs">
                <span class="font-semibold text-gray-900">
                  <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>${meal.category}
                </span>
                <span class="font-semibold text-gray-500">
                  <i class="fa-solid fa-globe text-blue-500 mr-1"></i>${meal.area}
                </span>
              </div>
            </div>
          </div>
        `;
      }

      recipesGrid.innerHTML = box;
    } catch (err) {
      console.log("filter error", err);
      recipesGrid.innerHTML = `
        <div class="col-span-full text-center py-10 text-red-600 font-semibold">
         Error
        </div>
      `;
    }
  });
}

initViewToggle();
function initViewToggle() {
  const gridBtn = document.getElementById("grid-view-btn");
  const listBtn = document.getElementById("list-view-btn");
  const recipesGrid = document.getElementById("recipes-grid");

  if (!gridBtn || !listBtn || !recipesGrid) return;

  gridBtn.addEventListener("click", function () {
    recipesGrid.classList.remove("grid-cols-1");
    recipesGrid.classList.add("grid-cols-4");

    gridBtn.classList.add("bg-white", "shadow-sm");
    listBtn.classList.remove("bg-white", "shadow-sm");
  });

  listBtn.addEventListener("click", function () {
    recipesGrid.classList.remove("grid-cols-4");
    recipesGrid.classList.add("grid-cols-2");

    listBtn.classList.add("bg-white", "shadow-sm");
    gridBtn.classList.remove("bg-white", "shadow-sm");
  });
}

initAreaFilter();
function initAreaFilter() {
  const areas = document.getElementById("areas");
  const grid = document.getElementById("recipes-grid");
  if (!areas || !grid) return;

  areas.addEventListener("click", async function (e) {
    const btn = e.target.closest(".area-filter-btn");
    if (!btn) return;

    const area = btn.getAttribute("data-area");
    if (!area) return;

    const allBtns = areas.querySelectorAll(".area-filter-btn");
    for (let i = 0; i < allBtns.length; i++) {
      allBtns[i].classList.remove("bg-emerald-600", "text-white");
      allBtns[i].classList.add("bg-gray-100", "text-gray-700");
    }
    btn.classList.remove("bg-gray-100", "text-gray-700");
    btn.classList.add("bg-emerald-600", "text-white");

    grid.innerHTML = `
      <div class="col-span-full flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
      </div>
    `;

    try {
      const url = `https://nutriplan-api.vercel.app/api/meals/filter?area=${area}`;
      const res = await fetch(url);
      const json = await res.json();

      const data = json.results || json.result || json.data || json.meals || [];

      if (!Array.isArray(data) || data.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full text-center py-10 text-gray-600">
            Error strong>${area}</strong>
          </div>
        `;
        return;
      }

      let box = "";
      for (let i = 0; i < data.length; i++) {
        const meal = data[i];

        box += `
          <div class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group" data-meal-id="${meal.id}">
            <div class="relative h-48 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src="${meal.thumbnail || ""}" alt="${meal.name || ""}" loading="lazy" />
              <div class="absolute bottom-3 left-3 flex gap-2">
                <span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">${meal.category || ""}</span>
                <span class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white">${meal.area || ""}</span>
              </div>
            </div>

            <div class="p-4">
              <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">${meal.name || ""}</h3>
              <p class="text-xs text-gray-600 mb-3 line-clamp-2">${meal.instructions || ""}</p>
              <div class="flex items-center justify-between text-xs">
                <span class="font-semibold text-gray-900"><i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>${meal.category || ""}</span>
                <span class="font-semibold text-gray-500"><i class="fa-solid fa-globe text-blue-500 mr-1"></i>${meal.area || ""}</span>
              </div>
            </div>
          </div>
        `;
      }

      grid.innerHTML = box;
    } catch (err) {
      grid.innerHTML = `
        <div class="col-span-full text-center py-10 text-red-600 font-semibold">
         error
        </div>
      `;
    }
  });
}
