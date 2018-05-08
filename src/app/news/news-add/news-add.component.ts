import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Article } from '../article';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {

  @Output() addArticle = new EventEmitter<any>();
	@Output() editArticle = new EventEmitter<any>();
	public articleForm: FormGroup;
	@Input() canAdd : boolean = true;
	@Input('selectedArticle') article: Article = new Article();
	public submitted: boolean = false;
	public isEditing: boolean = false;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.createForm();
	}

	createForm() {
		this.articleForm = this.formBuilder.group({
			_id: new FormControl(undefined),
			title: new FormControl('', [
        Validators.required,
        Validators.minLength(20), 
				Validators.maxLength(50)
      ]),
			body: new FormControl('', [
				Validators.required, 
				Validators.minLength(100), 
				Validators.maxLength(1000)
			])
		});
	}

	onSubmit() {
		if(this.isEditing){
			this.editArticle.emit({article:this.articleForm.value,form:this.articleForm});
			this.isEditing = false;
		} else {
			this.addArticle.emit({article:this.articleForm.value,form:this.articleForm});
		}
		this.submitted = true; 
	}

	ngOnChanges(changes){
		console.log('changes',changes)
		if(changes.article && changes.article.currentValue._id){
			console.log('is editing');
			if(changes.article.currentValue.__v !== undefined) {
				delete changes.article.currentValue.__v;
			}
			this.articleForm.setValue(changes.article.currentValue);
			this.isEditing = true;
		}
	}

	revert(){
		this.articleForm.reset();
		this.submitted = false;
		this.isEditing = false;
	}

}
