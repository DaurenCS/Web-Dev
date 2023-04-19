from django.urls import path, re_path
from api import view


urlpatterns = [
    path('companies/', view.company_list),
    path('companies/<int:company_id>', view.company_details),
    path('companies/<int:company_id>/vacancies', view.vacancies_by_company),
    path('vacancies/', view.vacancy_list),
    path('vacancies/<int:vacancy_id>', view.vacancy_details),
    path('vacancies/top_ten', view.top_ten),

]
