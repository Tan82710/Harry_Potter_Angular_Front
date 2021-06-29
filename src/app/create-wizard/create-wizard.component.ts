import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ApiHPService } from '../api-hp.service'
import { Wizard } from '../Class/wizard'

@Component({
  selector: 'app-create-wizard',
  templateUrl: './create-wizard.component.html',
  styleUrls: ['./create-wizard.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]

})
export class CreateWizardComponent implements OnInit {

  wizard: Wizard[]
  newWizard: Wizard[]

  maisons = []
  maisonChoisi: string;

  ecoles: string[] = ['Poudlard', 'Durmstrang', 'Beauxbâton', 'Koldovstoretz', 'Castelobruxo', 'Uagadou', 'Mahoutokoro', 'Ilvermorny'];
  ecoleChoisi: string;

  coursObli: string[] = ['Astronomie', 'Botanique', 'Défense contre les forces du Mal', 'Histoire de la magie', 'Métamorphose', 'Potions', 'Sortilèges', 'Vol sur balai'];
  coursObliChoisi: string;
  coursOptio: string[] = ['Arithmancie', 'Divination', 'Etude des Moldus', 'Etude des runes', 'Soins aux créatures magiques'];
  coursOptioChoisi: string;

  baguetteCrea = []
  baguette = {}
  bois: string;
  coeur: string;
  boisBaguette: string[] = ['Acacia', 'Acajou', 'Amourette', 'Aubépine', 'Aubépine des marais', 'Aulne', 'Bouleau', 'Cèdre', 'Cerisier', 'Charme',
    'Châtaignier', 'Chêne', 'Chêne blanc', 'Chêne rouge', 'Cornouiller', 'Cyprès', 'Ébène', 'Épicéa', 'Érable à sucre', 'Frêne', 'Frêne épineux',
    'Hêtre', 'Houx', 'Laurier', 'Lierre', 'Mélèze', 'Mélèze laricin', 'Noisetier', 'Noyer', 'Noyer noir', 'Orme', 'Peuplier', 'Pin', 'Poirier',
    'Pommier', 'Prunellier', 'Rose', 'Roseau', 'Sapin', 'Saule', 'Séquoia', 'Sorbier', 'Sureau', 'Sycomore', 'Tilleul argenté', 'Tremble', 'Vigne'
  ]
  coeurBaguette: string[] = ['Cheveu de Vélane', 'Corail', 'Corne de Basilic', 'Corne de Jackalope', 'Corne de Serpent cornu', 'Crin de Kelpy',
    'Crin de licorne', 'Crin de Sombral', 'Épine de monstre du Fleuve Blanc', 'Moustache de Fléreur', 'Plume d\'oiseau-tonnerre', 'Plume de phénix',
    'Poil de rougarou', 'Moustache de troll', 'Poil de womatou', 'Tige de dictame', 'Ventricule de dragon', 'Ventricule de Snallygaster']
  tailleBaguette = 0
  souplesseBaguette: string[] = ['Très souple', 'Souple', 'Légèrement souple', 'Très rigide', 'Rigide', 'Légèrement rigide', 'Très flexible',
    'Flexible', 'Légèrement flexible']
  souplesse = ''

  sangs = [
    { name: 'Sang-Pur', infos: "Un Sang-Pur est un sorcier qui n'a aucun Moldu ni né-Moldu parmi ses parents et grands-parents. Ce statut les pousse parfois à se prétendre supérieurs aux autres sorciers et aux Moldus. Certains Sang-Pur haïssent les Moldus et les plus extrémistes d'entre eux voudraient leur donner le statut d'animaux. Ex: Famille Malefoy" },
    { name: 'Sang-Mêlé', infos: "Un Sang-Mêlé est un sorcier ayant au moins un ascendant sorcier (qui est un Sang-Mêlé ou un Sang-Pur) et un parent Moldu (ou Né-Moldu). Aujourd'hui, la plupart des sorciers et sorcières sont des Sang-Mêlés. Ex: Harry Potter" },
    { name: 'Nés-Moldus', infos: "Un né-Moldu est un sorcier né de deux parents Moldus. Ils étaient nommés affectueusement Mutmags du temps de Salazar Serpentard, un mélange probable entre mutant et magie. A l'époque, on les considérait comme étant particulièrement doués pour la magie. Ex: Hermione Granger" },
    { name: 'Cracmols', infos: "Un Cracmol est une personne née d'au moins un parent sorcier mais qui est dépourvue de pouvoirs magiques. Ce sont des cas très rares car la magie est un gène dominant et résistant. Les Cracmols ne sont pas admis à Poudlard en tant qu'élèves. Un Cracmol n'est pas un Moldu. Par exemple, à la grande différence des Moldus, les Cracmols, bien qu'incapables de voir des Détraqueurs, ont assez de connaissances en magie pour identifier leur présence. Ex: Argus Rusard (le concierge de Poudlard)" },
    { name: 'Hybrides', infos: "Les hybrides sont des humains avec au moins un parent n'étant pas humain, bien que les sorciers ayant un ancêtre non-humain sont aussi considérés comme des hybrides. Ils sont très rares et ont les traits des deux espèces, telle que la capacité d'utiliser la magie et de résister aux sorts pour ceux qui ont du sang de géant. Ex: Rubeus Hagrid (Demi-Géant)" },
  ]
  sangChoisi = []

  myControl = new FormControl();
  examplePatronus: string[] = ['Chien', 'Chat', 'Cheval', 'Phénix', 'Dragon'];
  filteredExamplePatronus: Observable<string[]>;

  title = ''
  text = 'Créer votre propre sorcier'

  validate = true
  name: string;
  patronus: string;

  sorcier = []
  wiz = ''

  
  //Utilisation de Stepper - Angular Material
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;

  constructor(public readonly swalTargets: SwalPortalTargets, private _formBuilder: FormBuilder,
    private HpService: ApiHPService) { }

  ngOnInit(): void {
    this.filteredExamplePatronus = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.play()
    this.stepperFunction()
    this.getWizard()
  }

  ngDoCheck() {

  }

  createAndAdd() {
    this.createWizard()
    this.addWizard(this.sorcier)
    window.location.reload()
  }

  createWizard() {
    this.sorcier.splice(1, 0, {
      nom: this.name,
      ecole: this.ecoleChoisi,
      maison: this.maisonChoisi,
      baguette: this.baguette,
      patronus: this.patronus,
      sang: this.sangChoisi,
      coursObligatoire: this.coursObliChoisi,
      coursOptionnel: this.coursOptioChoisi
    })
    console.log(this.sorcier)
    console.log(this.sorcier[0].baguette)
    console.log(Object.values(this.sorcier[0]))
    
    this.sorcier = Object.values(this.sorcier[0])
    let sorcier = this.sorcier.length
    for (let i = 0; i < sorcier; i++) {
      console.log(this.sorcier[i])
      if (this.sorcier[i] == undefined)
        return console.error('Champ: ' + this.sorcier[i] + ' invalide');

    }
  }

  //Envoie des données en backend via HpService
  addWizard(wizard) {
    wizard = this.sorcier
    console.log('WIZARD: ' + JSON.stringify(wizard))
    this.HpService.addData(wizard).subscribe(
      res => { console.log(res) }
    )
  }

  //Récupère les données stocké en BDD
  getWizard() {
    this.HpService.getData().subscribe(
      res => {
        this.newWizard = res
        console.log(this.newWizard)
      }
    )
  }

  stepperFunction() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      secondCtrl1:['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
      thirdCtrl1: ['', Validators.required],
      thirdCtrl2: ['', Validators.required],
      thirdCtrl3: ['', Validators.required]
    
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required],
      sixthCtrl1: ['', Validators.required]
    });
    // console.log(this.firstFormGroup)
    // console.log(this.thirdFormGroup)
  }

  //utilisation de step pour l'ouverture et la fermeture de l'expansion-panel
  step = 0;
  setStep(index: number) {
    this.step = index;
  }

  //Fonction pour animation title
  play = () => {
    this.title = `<h5><strong>${this.text.slice(0, this.index)}</strong><h5>`
    this.index++

    if (this.index > this.text.length) {
      this.index = 0
    }

    clearInterval(this.timer)
    this.timer = setInterval(this.play, this.randomSpeed(50, 300))
  }
  timer = setInterval(this.play, 300)
  index = 0
  randomSpeed = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  //Autocomplete
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.examplePatronus.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  //Afficher ou masquer une div
  show(data) {
    document.getElementById(`${data}`).style.display = 'block';
  }

  //Afficher la valeur sur la mat-slider
  formatLabel(value: number) {
    return value + 'cm';
  }

  // Valide la taille et la souplesse de la baguette
  validateSize() {
    // debugger;
    this.baguette = { 'bois': this.bois, 'coeur': this.coeur, 'taille': this.tailleBaguette, 'souplesse': this.souplesse }
    // this.baguetteCrea.splice(0, 0, { 'bois': this.bois, 'coeur': this.coeur, 'taille': this.tailleBaguette, 'souplesse': this.souplesse })
    this.step++;
    //PopUp SweetAlert2
    Swal.fire({
      text: `La baguette qui vous a choisi est en ${this.bois} avec un coeur de ${this.coeur}. 
      Elle est ${this.souplesse} et mesure ${this.tailleBaguette} cm`,
      icon: 'success'
    })
  }

  //Insert le bois et le coeur dans un array baguette
  selected(data: any, id) {

    if (id == 'bois') {
      this.bois = data
      // this.baguette.splice(0, 0, { 'bois': this.bois })
      //Au changement du bois, on laisse le panel du coeur fermé.
      //De même pour le changement du coeur.
      if (this.baguette[1]) {
        this.setStep(-1)
      } else {
        this.step++
      }
    } else if (id == 'coeur') {
      this.coeur = data
      // this.baguette.splice(1, 0, { 'coeur': this.coeur })
      // this.baguette.splice(0, 0, {'bois': this.bois, 'coeur': this.coeur })
      if (this.baguette[2]) {
        this.setStep(-1)
      } else {
        this.step++
      }
    } else if (id == 'souplesse') {
      this.souplesse = data
    }
  }

  //Permet de changer le bois, le coeur ou la taille
  removed(arg1, arg2) {
    if (arg1 == 'bois' && arg2 == 'changeBois') {
      this.baguetteCrea.splice(0, 1)
    } else if (arg1 == 'coeur' && arg2 == 'changeCoeur') {
      this.baguetteCrea.splice(1, 1)
    } else if (arg1 == 'taille' && arg2 == 'changeTaille') {
      this.baguetteCrea.splice(2, 1)
    }
    // console.log(this.baguette)
  }

  //Choix de l'école et la maison
  houseChoice() {
    console.log(this.ecoleChoisi)
    switch (this.ecoleChoisi) {
      case 'Poudlard':
        this.maisons = [
          { name: 'Gryffondor', infos: "L'emblème des Gryffondor est le lion, considéré comme la plus courageuse de toutes les créatures. Si vous allez à Gryffondor Vous rejoindrez les courageux, Les plus hardis et les plus forts, Sont rassemblés en ce haut lieu." },
          { name: 'Serpentard', infos: "Le serpent est l'emblème des Serpentard, considéré comme la plus sage de toutes les créatures. Vous finirez à Serpentard, Si vous êtes plutôt malin, Car ceux-là sont de vrais roublards, Qui parviennent toujours à leurs fins." },
          { name: 'Serdaigle', infos: "L'emblème des Serdaigle est l'aigle, considéré comme l'oiseau « volant le plus haut. Si vous êtes sage et réfléchi, Serdaigle vous accueillera peut-être, Là-bas, ce sont des érudits, Qui ont envie de tout connaître." },
          { name: 'Poufsouffle', infos: "À l'image du blaireau qui sait « faire profil bas et se défendre comme il le faut, quand il le faut », Si à Poufsouffle vous allez, Comme eux vous serez juste et loyal, Ceux de Poufsouffle aiment travailler, Et leur patience est proverbiale." }
        ]
        break;
      case 'Durmstrang':
        this.maisons = [
          { name: 'Kostein', infos: "Maison Minérale : Le blason représente un diamant ceint d'une couronne sur fond bleu-roi encadré d'or blanc. Quant au directeur, il s'agit de Technovee Kinglür." },
          { name: 'Uzem', infos: "Maison Végétale : Le blason représente une moitié de Fleur de Lys sur fond vert émeraude, couplée à une moitié de plante de Filet du Diable sur fond bronze." },
          { name: 'Dyr', infos: "Maison Animale : Le blason représente une tête de Sombral sur fond rouge sang entouré de deux épées sur fond noir. Quant au directeur, il s'agit de Viktor Krum." }
        ]
        break;
      case 'Beauxbâton':
        this.maisons = [
          { name: 'Aloysia', infos: "Plante : La verveine, qui symbolise la réflexion. Couleur : Le rouge, qui symbolise la passion. Devise : « Les mots sont nos armes »." },
          { name: 'Lonicera', infos: "Plante : Le chèvrefeuille, qui symbolise la force tranquille. Couleur : Le bleu, qui symbolise la patience. Devise : « Le temps détruira vos murailles »." },
          { name: 'Urtica', infos: "Plante : L'ortie symbolise la force de caractère. Couleur : Le Jaune symbolise la puissance. Devise : « Qui s’y frotte s’y pique »." }
        ]
        break;
      case 'Koldovstoretz':
        this.maisons = [
          { name: 'Aristov', infos: "Courage, loyauté, détermination. Elément : Feu" },
          { name: 'Grigorieva', infos: "Erudition, altruiste, attentif, débrouillard. Elément : Eau" },
          { name: 'Romanov', infos: "Habilité, stratégique, ambition. Elément : Air" },
          { name: 'Voronina', infos: "Imagination, curieux, artistique. Elément: Terre" }
        ]
        break;
      case 'Castelobruxo':
        this.maisons = [
          { name: 'Livestica', infos: "Livestica représente les élèves les plus altruistes, et par conséquent les plus inoffensifs d'entre tous. Représentés par une fleur jaune, les livesticiens sont décrits comme ayant la main sur le coeur." },
          { name: 'Cranson', infos: "Cranson représente les élèves les plus studieux, ceux qui utilisent davantage leur raison que tout autre instinct primitif. Représentés par une fleur jaune et une fleur blanche entremêlées (ils sont les seuls à avoir deux fleurs), les cransoniens sont décrits comme étant souvent plongés dans leur livres, et ceux obtenant généralement les meilleurs résultats aux examens de fin d'année." },
          { name: 'Asphodelius', infos: "Asphodelius représente les élèves les plus courageux, ceux qui pensent avec leur coeur avant de penser avec leur tête. Représentés par une fleur blanche, les asphodèles sont décrits comme étant très souvent casse-cous, ce sont les plus difficiles à gérer et canaliser." },
          { name: 'Elleboria', infos: "Elleboria représente les élèves les plus loyaux, ceux qui protègent leur maison avant tout. Représentés par une fleur bleue, les elléboriens sont les plus proches des livesticiens, et peuvent par conséquent être assez souvent confondus, bien qu'ils soient décrits plus souvent comme moins sages que les élèves de Livestica." },
          { name: 'Belladonia', infos: "Belladonia représente les élèves les plus dangereux, les plus traditionnels, et souvent qualifiés d'indépendants, tirant sur la plus grande fourberie. Représentés par une fleur pourpre, les belladoniens sont souvent décrits comme membres de la maison la plus prestigieuse, et la mieux classée de Castelobruxo, malgré leur caractère belliciste." }
        ]
        break;
      case 'Uagadou':
        this.maisons = [
          { name: 'Panthenoir', infos: "Les Panthenoirs sont des guerriers. Ils sont dans l'attaque et agissent vite. Leur animal sacré est la panthère noire. Ils portent les couleurs marron et rouge." },
          { name: 'Musardeau', infos: "Les Musardeaux sont des guérisseurs. Ils pansent les blessures, autant physiques que morales et sont très à l'écoute des autres. Leur animal sacré est le Musard. Ils portent les couleurs jaune et orange." },
          { name: 'Veruptif', infos: "Les Veruptifs sont des protecteurs. Agissant en défense, ils protègent les autres et veillent sur eux. Leur animal sacré est l'éruptif. Ils portent la couleur verte." },
          { name: 'Focifoses', infos: "Les Focifoses sont des leaders. Ils ont de l'ambition et veulent être aimés des autres. Leur animal sacré est le Focifère. Ils portent les couleurs violet et rose." },
          { name: 'Surricatuie', infos: "Les Surricatuies sont des diplomates. Ils savent manier les mots et sont extrêmement malins. Leur animal sacré est le Surricate. Ils portent la couleur turquoise." }
        ]
        break;
      case 'Mahoutokoro':
        this.maisons = [
          { name: 'Seiran', infos: "Les attributs : Audacieux, imaginatif, prudent et intuitif. Animal : Cerf sika" },
          { name: 'Yosamu', infos: "Les attributs : Patient, idéaliste, adaptable, protecteur. Animal : Cerf-volant" },
          { name: 'Toppuu', infos: "Les attributs : Méticuleux, vif d'esprit, reconnaissant, percevoir. Animal : Anguille" },
          { name: 'Shunrai', infos: "Les attributs : sur de sois, imprévisible, bonne humeur, curieux. Animal : Chat" },
        ]
        break;
      case 'Ilvermorny':
        this.maisons = [
          { name: 'Serpent Cornu', infos: "La maison du Serpent cornu a été fondée par . Isolt Sayre Elle lui a donné ce nom en hommage à son animal magique préféré, dont elle se sent très liée. Son blason est un Serpent cornu formant le nœud gordien de la broche de la mère d'Isolt . Elle symbolise les esprits et favorise les érudits." },
          { name: 'Womatou', infos: "Elle symbolise le corps et favorise les guerriers, Webster Boot est le fondateur de cette maison." },
          { name: 'Oiseau-tonnerre ', infos: "La maison de l'Oiseau Tonnerre a été fondée par Chadwick Boot qui l'a ainsi nommé en l'honneur de son animal magique préféré. Cette Maison est pour les aventurier et symbolise l'âme." },
          { name: 'Puckwoodgenie', infos: "La maison du Puckwoodgenie a été fondée par James Steward qui lui a donné ce nom car les histoires sur William le Puckwoodgenie l'ont toujours fait rire ! Elle symbolise le coeur et favorise les gérisseurs." }
        ]
        break;
    }
    console.log(this.maisons)
  }

}
