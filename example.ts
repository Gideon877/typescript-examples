'esversion: 6'
module Example{
    class Person implements Family{
        private _age: number;
        constructor(public fname: string,
                    public lname: string,
                    public familyName: string,
                    public numberFamilyMembers: number,
                    public maritalStatus: string,
                    public ownHome: boolean,
                    public totalFamilyIncome: number
                    )
        {
            console.log("Person created")
        }

        get age(): number{
            return this._age;
        }
        set age(age: number){
            this._age = age;
        }
    }
    var thabang = new Person('Thabang', 'Gideon', 'Gideon', 4, 'Single', true, 200000)
    thabang.age = 20;

    console.log(thabang)
}

interface Family{
    familyName: string,
    numberPets?: number,
    numberFamilyMembers: number,
    maritalStatus: string,
    ownHome: boolean,
    totalFamilyIncome: number
}
