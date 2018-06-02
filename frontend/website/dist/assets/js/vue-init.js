new Vue({
    el: '#app',
    data: {
      cmd: '',
      step: '0',
      history: [],
      commands: [
          {command: `r = new Robonomics()`, result: `Robonomics({version: 0})`},
          {command: `r.getMarkets()`, result: `[ “lights-out-factory.model.airalab.eth”;
            “smart-city.model.airalab.eth”;
            “self-driving-logistics.model.airalab.eth”; ]
            `},
          {command: `r.getBid(r.getMarkets()[0], (msg, meta) => console.log(msg))`, result: `{
            address: "0x7453C2418d6b3A475A750022cCd01f378d60Fa95",
            model: "QmfCcLKrTCuXsf6bHbVupVv4zsbs6kjqTQ7DRftGqMLjdW",
            token: "0x0Ef7fCB816fd725819e071eFB48F7EACb85c1A6A",
            cost: 1,
            count: 1,
            lighthouseFee: 0,
            deadline: 7485352,
            salt: "0x30f9df3201c5d5fe5e18b5627e4ab3c7fcaab1677e0a6fe646c224962b610786",
            signature: "0x9a8dc25cfb2e8368585ca7bc38bcaca985dee8f1734eecc60c627f6fedec912d4deb6d31e39bd96dde157b18fb9d6948ecf2328ae1c21767480183a321f9e8f01c"
          }`},
          {command: `r.postAsk(r.getMarkets()[0], msg, liability => console.log(liability))`, result: `{
            address: "0x29782132f7badb3a1e87b652894b880a04c10da4",
            lighthouse: "0x681ed5c6ea99931efff11e53ce8e6c56be0d643e",
            model: "QmfCcLKrTCuXsf6bHbVupVv4zsbs6kjqTQ7DRftGqMLjdW",
            cost: 1,
            objective: "QmdrDQ9JANWe9m7mTTzgHJUELCKvbqDVyBw8twvLgqU7Va",
            promisee: "0x7453c2418d6b3a475a750022ccd01f378d60fa95",
            promisor: "0xc05e1226f79dae97e2189dea1151d67bef2c069d",
            token: "0x0ef7fcb816fd725819e071efb48f7eacb85c1a6a",
            validator: "0x0000000000000000000000000000000000000000",
            validatorFee: 0,
            from: "0x709d5a9a5462c59d4fd68112ce47e74c56f19ac4",
            finalized: false,
            result: ""
          }`},
          {command: `liability.getResult(result => console.log(result); console.log(r.fancyResult(result))`, result: `“QmWboFP8XeBtFMbNYK3Ne8Z3gKFBSR5iQzkKgeNgQz3dz2” 

            +-----------+---------+------+
            | std_msgs/String | /avg_speed | 47 km/h|
            |std_msgs/String | /high_speed | 167 km/h |
            |std_msgs/String | /distance | 111 km |
            |std_msgs/String | /avg_engine_temperature | 85 C |
            |std_msgs/String | /tyres_check | ok |
            |std_msgs/String | /Cruise_control_module | ok |
            `}
        ]
    },
    
    methods: {
      
      process () {

        this.history.push(this.cmd);

        var curInd = this.commands
          .map(function (element) {if (element) return element.command;})
          .indexOf(this.cmd);


        if ( curInd == this.step ){
            this.history.push(this.commands[this.step].result);
            this.step++;
        } else if (  ( curInd < 0 ) || ( curInd === undefined ) ) {
            this.history.push(this.cmd + ': command not found');
        } else {
            if ( this.step >= this.commands.length )
              this.history.push('You are done with the lesson. Please, follow our further instructions in the Info panel');
            else
              this.history.push(this.cmd + ': this command is not expected now');
        }

        this.cmd = '';
 
      },

      setCmd (e) {
        // console.log(e.target.textContent);
        this.cmd = e.target.textContent;
      }
    },

    computed: {
      progress () {
        if ( this.step < this.commands.length){
          let w = (100 / this.commands.length) * this.step;
          return{
            width: w + '%'
          }
        }
        else{
          return{
            width: '100%'
          }
        }
      },

      curStep () {
        if ( this.step == 0 )
          return Number(this.step)+1;
        else
          return this.step;
      },

      getCmd () {
        // console.log(this.commands[this.step].command);
        return this.commands[this.step].command
      }
    }
});

