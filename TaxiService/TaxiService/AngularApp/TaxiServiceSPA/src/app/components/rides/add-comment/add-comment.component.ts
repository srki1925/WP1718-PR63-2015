import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { IComment } from '../../../services/interfaces';
import { RidesService } from '../../../services/rides.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  commentForm: FormGroup = new FormGroup(
    {
      description: new FormControl(null, Validators.required),
      rate: new FormControl(null)
    }
  );
  rideId:number;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private ridesService:RidesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) =>{
        this.rideId = params['id'];
        if(!this.rideId){
          this.router.navigate(['/home/rides']);
        }
      }
    );
  }

  onSubmit(){
    const comment : IComment = {
      time: null,
      rating: this.commentForm.value.rate,
      description: this.commentForm.value.description,
      rideid: this.rideId
    }
    console.log(comment);
    this.ridesService.postComment(comment).subscribe(
      ok =>{
        this.router.navigate(['../'], {relativeTo:this.route});
      }
    );
  }

}
