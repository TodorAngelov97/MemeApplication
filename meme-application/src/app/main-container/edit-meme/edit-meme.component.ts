import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemeService } from '../../services/meme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-meme',
  templateUrl: './edit-meme.component.html',
  styleUrls: ['./edit-meme.component.scss']
})
export class EditMemeComponent implements OnInit {

  title: string;
  file: File;
  id: any;
  constructor(private memeService: MemeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }


  fileChanged(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    console.log('update');
    const formData = new FormData();
    formData.append('title', this.title);
    formData.append('file', this.file);
    this.memeService.updateMeme(formData, this.id).subscribe(
      data => {
        return this.router.navigate(['']);
      });
  }

}
