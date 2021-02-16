import { formatCurrency } from '@angular/common';
import { TmplAstElement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interfaces/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [
    {
      task: "buy groceries",
      completed: true,
    },
    {
      task: "prep veggies",
      completed: true,
    },
    {
      task: "cook dinner",
      completed: false,
    },
    {
      task: "walk dog",
      completed: false,
    },
    {
      task: "learn to fly",
      completed: false,
    },
  ]

  searchTerm: string = "";

  // DATA^^^
  constructor() { }
  
  ngOnInit(): void {
  }
  //  METHODS BELOw
  deleteTask = (index: number):void => {
    this.todos.splice(index, 1);
  };

  completeTask = (task: Todo): void => {
    task.completed = true;
  }

  addTask = (form: NgForm) => {
    this.todos.push({task: form.value.addTask, completed: false});
  }

  // setSearchTerm = (form: NgForm) => {
  //   console.log(this.searchTerm);
  //   this.searchTerm = form.form.value.term;
  //   console.log(form.form.value.term);
  // }

  filterList = (term: string): Todo[] => {
    return this.todos.filter((item) => {
      let currentItem: string = item.task.toLowerCase().trim();
      return currentItem.includes(term.toLowerCase().trim());
    })
  }

}
