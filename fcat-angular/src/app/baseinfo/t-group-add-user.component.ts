/**
 * Created by F1 on 2017/6/1.
 */
import {Component, OnInit, enableProdMode} from "@angular/core";
import {Router, Params, ActivatedRoute} from "@angular/router";
import {TUserService} from "./t-user.service";
import {TUser} from "./t-user";
import {PageChangedEvent} from "ngx-bootstrap/pagination/pagination.component";
import {TGroup} from "./t-group";
import {Location} from "@angular/common";
import {TGroupService} from "./t-group.service";
enableProdMode();//阻止报错：Expression has changed after it was checked
declare var $:any;

@Component({
  templateUrl: './t-group-add-user.component.html',
})

export class TGroupAddUserComponent implements OnInit {
  msg: string;
  userList:TUser[];
  selectedUser:TUser = new TUser();
  firstText:string = '首页';
  disabled:boolean;
  firstName:string = '基础配置';
  secondName:string = '组织架构管理';
  tGroup:TGroup;

  /**分页用到的参数**/
  pageSize:number = 2;
  maxSize:number = 5;
  totalItems:number;
  currentPage:number = 1;

  constructor(private router:Router,
              private route: ActivatedRoute,
              private tGroupService: TGroupService,
              private tUserService:TUserService,
              private location:Location) {
    //noinspection TypeScriptValidateTypes
    this.route.params
      .switchMap((params: Params) => {
        return this.tGroupService.getById(+params['id'])
      })
      .subscribe(data => {
        this.tGroup = data.data;
      });
  }

  ngOnInit():void {
      this.getUserList();
    $(".select2").select2();
    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'iradio_minimal-blue'
    });
    //Red color scheme for iCheck
    $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
      checkboxClass: 'icheckbox_minimal-red',
      radioClass: 'iradio_minimal-red'
    });
    //Flat red color scheme for iCheck
    $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass: 'iradio_flat-green'
    });
  }
  msg_(msg_:string) {
    this.msg = msg_;
  }
  pageChanged(page:PageChangedEvent) {
    this.currentPage = page.page;
    this.pageSize = page.itemsPerPage;
    this.getUserList();
  }

  numPages(numPages:number) {
    console.log(numPages);
  }

  onSelect(user:TUser):void {
    this.selectedUser = user;
  }

  getUserList():void {
    this.tUserService.getList(this.currentPage, this.pageSize).subscribe(data => {
      this.userList = data.data.data;
      this.totalItems = data.data.size;
    });

   }

  delete():void {
    if(!this.selectedUser.id){
      this.msg = "请选择用户信息";
      return;
    }
    if(window.confirm('你确定要删除记录吗？')){
      this.tUserService.delete(this.selectedUser.id).subscribe(data => {
        if(data.code==0){
          this.msg = "删除成功";
          this.getUserList();
        }else{
          this.msg = "删除失败";
        }
      });
    }
  }

  edit(){
    if(!this.selectedUser.id){
      this.msg = "请选择用户信息";
    }else{
      this.router.navigate(['/index/tUserUpdate', this.selectedUser.id]);
    }
  }

  onSubmit(){
    this.msg = "添加成功";
    setTimeout(() => {this.goBack()},1000);
/*    if(!this.checkGroup(this.tGroup)){
      return;
    }
    this.tGroupMockService.add(this.tGroup)
      .then(
        data  => {
          if(data.code == 0){
            this.msg = "添加成功";
            setTimeout(() => {this.goBack()},1000);
          }else{
            this.msg = "添加失败";
          }
        },
        error =>  this.errorMessage = <any>error);*/
  }

  goBack(): void {
    this.location.back();
  }
}
