<template>
  <div>
    <div class="result">
      <div class="ui internally celled grid">
        <!-- search div -->
        <div class="five wide column">
          <h3 class="ui teal center header">Options de recherche</h3>
          <!-- dropbox on sectors -->
          <div class="ui selection dropdown item">
            <input type="hidden" name="sector">
            <i class="dropdown icon"></i>
            <div class="default text">Secteur</div>
            <div class="menu">
              <div class="item" data-value="5">Restauration / Loisirs</div>
              <div class="item" data-value="4">Services publics / Administrations</div>
              <div class="item" data-value="3">Santé / Protection Sociale</div>
              <div class="item" data-value="2">Informatique / Telecom / Internet</div>
              <div class="item" data-value="1">Associatif / Art / Culture</div>
              <div class="item" data-value="0">Banque / Assurances / Finances</div>
            </div>
          </div>

          <!-- dropbox of contract type  -->
          <div class="ui selection dropdown space">
            <input type="hidden" name="contract">
            <i class="dropdown icon"></i>
            <div class="default text">Type de Contrat</div>
            <div class="menu">
              <div class="item" data-value="4">Intérime</div>
              <div class="item" data-value="3">Altérnance</div>
              <div class="item" data-value="2">Stage</div>
              <div class="item" data-value="1">CDI</div>
              <div class="item" data-value="0">CDD</div>
            </div>
          </div>

          <!-- drop down of skills -->
          <select name="skills" multiple="" class="ui fluid dropdown">
            <option value="">Compétences</option>
            <option value="angular">AngularJs</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
            <option value="vue">VueJs</option>
            <option value="java">Java</option>
          </select>

          <!-- dropbox language  -->
          <div class="ui selection dropdown space">
            <input type="hidden" name="langue">
            <i class="dropdown icon"></i>
            <div class="default text">Langue</div>
            <div class="menu">
              <div class="item" data-value="3">Japonais</div>
              <div class="item" data-value="2">Russe</div>
              <div class="item" data-value="1">Allmand</div>
              <div class="item" data-value="0">Anglais</div>
            </div>
          </div>

          <!-- dropbox handicap  -->
          <div class="ui selection dropdown">
            <input type="hidden" name="hand">
            <i class="dropdown icon"></i>
            <div class="default text">Handicap</div>
            <div class="menu">
              <div class="item" data-value="1">Oui</div>
              <div class="item" data-value="0">Non</div>
            </div>
          </div>

          <div class="ui blue submit button" style="margin: 2rem 0 0 8.5rem">Recherche</div>
        </div>

        <!-- result div -->
        <div class="eight wide divided column">
          <div style="margin-left: 1rem">
            <h3 class="ui teal center header">Résultats</h3>
              <!-- profil result example-->
              <div class="ui link cards">
                <!-- desc -->
                <div class="ui card">
                  <div class="content">
                    <div class="center aligned header">Informatique</div>
                    <div class="center aligned description">
                      <p>Ingénieur Java</p>
                      <p><i class="file code outline icon"></i>: Java, CSS, HTML, JS, Hibernaten, PostgreSQL</p>
                    </div>
                  </div>
                  <div class="extra content">
                    <div class="center aligned blue author">
                      <div class="ui blue horizontal label">En savoir plus</div>
                    </div>
                  </div>
                </div>

                <!-- desc -->
                <div class="ui card">
                  <div class="content">
                    <div class="center aligned header">Administration</div>
                    <div class="center aligned description">
                      <p>Secrétaire pédagogique</p>
                      <p><i class="file code outline icon"></i>: EPSCP, Excel, Organisation, Pédagogue</p>
                    </div>
                  </div>
                  <div class="extra content">
                    <div class="center aligned blue author">
                      <div class="ui blue horizontal label">En savoir plus</div>
                    </div>
                  </div>
                </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .result{
    margin-left: 5rem;
    position: center;
  }

  .search{
    margin: 1.5rem auto;
    position: inherit;
  }

  .space{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
