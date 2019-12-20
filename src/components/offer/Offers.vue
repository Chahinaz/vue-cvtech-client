<template>
  <div class="two wide two divided column">
    <div class="search">
      <!-- search div -->
      <SearchOpt/>
    </div>
    <div class="result">
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
</template>

<script>
  import SearchOpt from '../SearchOpt'
  export default {
    components: {
      SearchOpt
    }
  }
</script>

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

  .offers{

  }
</style>
