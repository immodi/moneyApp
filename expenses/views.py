from django.shortcuts import render

def home_view(request):
    return render(request, 'expenses/index.html')

    
def add_expense(request):
    return render(request, 'expenses/add-expense.html')