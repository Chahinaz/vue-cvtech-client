<template>
  <div class="profiles">
    <div class="search">
      <!-- search div -->
      <SearchOpt/>
    </div>
    <div class="result">
      <div class="ui internally celled grid">
        <!-- result div -->
        <div class="eight wide divided column">
          <h3 class="ui teal center header">Résultats</h3>
            <!-- profil result example-->
            <div class="ui link cards">
              <!-- desc -->
              <div class="ui card">
                <div class="content">
                  <div class="center aligned header">Chahinaz Dindane</div>
                  <div class="center aligned description">
                    <p>Apprentie développeur au sein du CRI de l'UPEM</p>
                    <p><i class="file code outline icon"></i>: Java, CSS, HTML, JS, Scala</p>
                  </div>
                </div>
                <div class="extra content">
                  <div class="center aligned author">
                    <img class="ui avatar image" src="https://react.semantic-ui.com/images/avatar/large/molly.png"> Chahinaz
                  </div>
                </div>
              </div>

              <!-- desc -->
              <div class="ui card">
                <div class="content">
                  <div class="center aligned header">John Doe</div>
                  <div class="center aligned description">
                    <p>Développeur PHP, 11 ans d'expériences.</p>
                    <p><i class="file code outline icon"></i>: PHP, CSS, HTML, JS, Go</p>
                  </div>
                </div>
                <div class="extra content">
                  <div class="center aligned author">
                    <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/large/elliot.jpg"> John
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

  }

  .profiles{

  }
</style>
