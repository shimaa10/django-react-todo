from django.contrib import admin

# Register your models here.

from .models import Todo

class TodoAdmin(admin.ModelAdmin):  
  list_display = ('task', 'created_at') 

admin.site.register(Todo, TodoAdmin) 
