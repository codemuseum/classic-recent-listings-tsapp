var ClassicRecentListingsEdit = {
  init: function() {
    $$('div.app-classic-recent-listings').each(function(el) {
      el.getElementsBySelector('.listing a').each(function(listing) { listing.observe('click', function(ev) { ev.stop(); }) }); // Allow the links to be draggable by turning off their behavior
      
      el.getElementsBySelector('.datapath a').each(function(a) { a.observe('click', function() {
        el.getElementsBySelector('.datapath .readonly')[0].addClassName('hidden');
        el.getElementsBySelector('.datapath .editable')[0].removeClassName('hidden');
        el.getElementsBySelector('.datapath .editable input')[0].focus();
      }); });
    });
  }
}
ClassicRecentListingsEdit.init();