from django.http.response import JsonResponse
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


def company_list(request):
    serializer = CompanySerializer(Company.objects.all(), many = True)
    return JsonResponse(serializer.data, safe=False)


def vacancy_list(request):

    serializer = VacancySerializer(Vacancy.objects.all(), many = True)

    return JsonResponse(serializer.data, safe=False)

def vacancy_details(request, vacancy_id):
    try:
        serializer = VacancySerializer(Vacancy.object.get(id = vacancy_id))

        return JsonResponse(serializer.data)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status = 400)


def company_details(request, company_id):
    try:
        return JsonResponse(Company.objects.get(id=company_id).to_JSON())
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)



def vacancies_by_company(request, company_id):
    try:
        vacancies = Vacancy.objects.filter(company = company_id)
        return JsonResponse([v.to_JSON() for v in vacancies], safe=False)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

def top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')
    return JsonResponse([v.to_JSON() for v in vacancies], safe=False)
