function vertically_center(wrapper_id, wrapped_id) {
  wrapped_h = document.getElementById(wrapped_id).clientHeight;
  wrapper_h = document.getElementById(wrapper_id).clientHeight;
  delta = wrapper_h - wrapped_h;
  if (delta > 0) {
    padding = Math.floor(delta / 2) + 'px';
    $("#" + wrapper_id).css({"padding-top": padding, "padding-bottom": padding});
  }
};

$(document).ready(function(){
  $("#biography_btn").click(function() {
    var html = "\
    <link type='text/css' media='all' rel='stylesheet' href='css/biography.css' />\
    <div id='biography'>\
      <h1>Biography</h1>\
      <p>Professor Severus Snape was born 9 January, 1960 to Eileen Prince, a pure-blood witch, and Tobias Snape, a Muggle, making him a half-blood wizard. </p>\
      <p>In 1971 he began his first term at Hogwarts School of Witchcraft and Wizardry where he was Sorted into Slytherin House. </p>\
      <p>Severus's potions textbook contained a few spells and curses which he was credited with inventing.</p>\
      <p>When Severus Snape began his teaching career at Hogwarts in 1981, he initially applied for the position of Defence Against the Dark Arts, but was rejected multiple times. Dumbledore instead employed Snape in the position of Potions Master and Head of Slytherin House. </p>\
      <p>Professor Snape also worked with the new Defence Against the Dark Arts professor, Gilderoy Lockhart, in running the Duelling Club. During the 1997-1998 school year, Snape was named Headmaster of Hogwarts. Snape used his position as Headmaster to discreetly protect the students and to contain the Carrows.</p>\
    </div>\
    ";
    $("#content").html(html);
    vertically_center("content", "biography");
  });

  $("#subjects_btn").click(function() {
    var html = "\
    <link type='text/css' media='all' rel='stylesheet' href='css/subjects.css' />\
    <div id='subjects'>\
      <h1>Potions</h1>\
      <p>Potions is a core class and subject taught at Hogwarts School of Witchcraft and Wizardry. In this class, students learn the correct way to brew potions. They follow specific recipes and use various magical ingredients to create the potions, starting with simple ones and moving to more advanced ones as they progress in knowledge. </p>\
      <p>A standard potions kit includes plant ingredients such as Belladonna and supplies such as glass phials and weighing scales. The professor of this subject is referred to as a Potions Master. </p>\
      <h1>Defence Against the Dark Arts</h1>\
      <p>Defence Against the Dark Arts (sometimes written as DADA) is a subject taught at Hogwarts School of Witchcraft and Wizardry and Ilvermorny School of Witchcraft and Wizardry. In this class students learn how to magically defend themselves against Dark Creatures, the Dark Arts, and other dark charms. Offensive magic is also taught in this class, such as how to duel, which requires the use of both offensive and defensive magic.  </p>\
    </div>\
    ";
    $("#content").html(html);
    vertically_center("content", "subjects");
  });

  $("#schedule_btn").click(function() {
    var html = "\
    <link type='text/css' media='all' rel='stylesheet' href='css/schedule.css' />\
    <div id='schedule'>\
      <h1>Schedule</h1>\
      <table>\
        <thead>\
          <tr>\
            <th></th>\
            <th>Monday</th>\
            <th>Tuesday</th>\
            <th>Wednesday</th>\
            <th>Thursday</th>\
            <th>Friday</th>\
          </tr>\
        </thead>\
        <tbody>\
          <tr>\
            <td>1</td>\
            <td>\
              <h3>Potions</h3>\
              <h4>1 year</h4>\
            </td>\
            <td></td>\
            <td></td>\
            <td></td>\
            <td></td>\
          </tr>\
          <tr>\
            <td>2</td>\
            <td>\
              <h3>Potions</h3>\
              <h4>2 year</h4>\
            </td>\
            <td>\
              <h3>Defence against Dark Arts</h3>\
              <h4>3 year</h4>\
            </td>\
            <td></td>\
            <td>\
              <h3>Defence against Dark Arts</h3>\
              <h4>7 year</h4>\
            </td>\
            <td>\
              <h3>Potions</h3>\
              <h4>3 year</h4>\
            </td>\
          </tr>\
          <tr>\
            <td>3</td>\
            <td></td>\
            <td>\
              <h3>Defence against Dark Arts</h3>\
              <h4>4 year</h4>\
            </td>\
            <td>\
              <h3>Defence against Dark Arts</h3>\
              <h4>5 year</h4>\
            </td>\
            <td>\
              <h3>Defence against Dark Arts</h3>\
              <h4>5 year</h4>\
            </td>\
            <td></td>\
          </tr>\
          <tr>\
            <td>4</td>\
            <td></td>\
            <td></td>\
            <td>\
              <h3>Potions</h3>\
              <h4>1 year</h4>\
            </td>\
            <td></td>\
            <td></td>\
          </tr>\
        </tbody>\
      </table>\
    </div>\
    ";
    $("#content").html(html);
    vertically_center("content", "schedule");
  })
});
