/* TaskFlow Course — reusable quiz widget. No inline quiz JS in lessons; link this file. */
(function(){
  function wire(root){
    root.querySelectorAll('.q').forEach(function(q){
      var answer = q.getAttribute('data-answer');
      var fb = q.querySelector('.feedback');
      q.querySelectorAll('button').forEach(function(btn){
        btn.addEventListener('click', function(){
          var picked = btn.getAttribute('data-key');
          q.querySelectorAll('button').forEach(function(b){ b.classList.remove('correct','wrong'); });
          if(picked === answer){
            btn.classList.add('correct');
            fb.textContent = 'Correct — ' + (q.getAttribute('data-why') || 'that matches the mental model.');
            fb.className = 'feedback good';
          } else {
            btn.classList.add('wrong');
            fb.textContent = 'Not quite — re-read the diagram walkthrough above, then try again.';
            fb.className = 'feedback bad';
          }
        });
      });
    });
  }
  document.addEventListener('DOMContentLoaded', function(){ wire(document); });
})();
