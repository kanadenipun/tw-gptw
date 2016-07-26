
  
  Template.database1.helpers({
    getScores: function(){
      console.log('hello');
      return Scores.find({}, {sort:{QNO:1}}).fetch();
    },

    getImprovement: function(a,b){
      return (a/b).toFixed(2);
    },

    compare: function(a,b,c,d){
      if(a/b <= c/d)
        return true;
      else
        return false;
    },

    getCategory: function(a){
      if(a>80)
        return "success";
      else if(a>60)
        return "info";
      else if(a>50)
        return "warning";
      else
        return "danger";
    }


  });