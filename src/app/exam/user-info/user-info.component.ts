import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { QueryService } from '../query.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  phoneMask = "[\+][0-9]{1,4}]?[- \.]?[(]{1}[0-9]{3}[)]{1}[- \.]?[0-9]{3}[- \.]?[0-9]{2}[- \.]?[0-9]{2}";
  indexMask = "[1-9][0-9]{5}";

  userInfoFrom: FormGroup = this.formBuilder.group({
    name: [,  { updateOn: 'change' }],
    email: [, { updateOn: 'change' }],
    street: [, { updateOn: 'change' }],
    suite: [, { updateOn: 'change' }],
    city: [, { updateOn: 'change' }],
    zipcode: [, { validators: [Validators.pattern(this.indexMask)], updateOn: 'change' }],
    phone: [, { validators: [Validators.pattern(this.phoneMask)], updateOn: 'change' }],
    website: [, { updateOn: 'change' }],
  });
  workPlace: string;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private activeRoute: ActivatedRoute,
    private querySrv: QueryService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      console.log('params=',params);
      console.log('id=',id);
      this.querySrv.getUsers(id).subscribe((data) => {
        this.userInfoFrom.controls.name.setValue(data.name);
        this.userInfoFrom.controls.email.setValue(data.email);
        this.userInfoFrom.controls.street.setValue(data.address.street);
        this.userInfoFrom.controls.suite.setValue(data.address.suite);
        this.userInfoFrom.controls.city.setValue(data.address.city);
        this.userInfoFrom.controls.zipcode.setValue(data.address.zipcode);
        this.userInfoFrom.controls.phone.setValue(data.phone);
        this.userInfoFrom.controls.website.setValue(data.website);
        this.workPlace = data.company.name;
      })
    });
  }
  
  check() {}

}
