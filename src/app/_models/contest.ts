import { User } from './user';
import { Tag } from './tag';

export class Contest {
  name                    : String;

  type                    : String;

  prize                    : {
      coin                 :String;
      score                :String;
  }

  roundsInfo                : [{
      tags                : Tag[];
      level                : Number;
      start                :Date;
      end                    :Date;
  }];

  start                    : {
      time                : Date;
      constants            : {
          min                : Number;
          max                : Number;
      }
  };

  end                        : {
      time                : Date;
      constants            : {
          min                : Number;
          max                : Number;
      }
  };

  join                    : {
      time                : Date;
      level                : {
          min                : Number;
          max                : Number;
      };
      score                : {
          min                : Number;
          max                : Number;
      };
      payment                : {
          coin            : Number;
      }
  };

  availability            : {
      time                : Date;
  };

  generation                : {
      time                : Date;
  };

  contestans                : [User];

  rounds                    : [{
      question            : [{ }]; // should refer to question model
      contestansts        : {
          username        : {
              answer        :String;
          };
      }
  }];

}
