var names=new Array();
names[0]="yakkov";
names[1]="james";
names[2]="jos";
names[3]="ram";
names[4]="john";
names[5]="sam";
names[6]="jim";
names[7]="jack";
names[8]="smith";
names[9]="jason";
for (let i = 0;i < names.length;i++) {
    if (names[i].charAt(0)==='j' || names[i].charAt(0)==='J') {
        console.log("goodbye "+names[i])
    }
    else{
        console.log("hello "+names[i])
  }
}
