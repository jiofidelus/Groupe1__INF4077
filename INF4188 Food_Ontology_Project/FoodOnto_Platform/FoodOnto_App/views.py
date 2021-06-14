from django.shortcuts import render
from django.http import HttpResponse
import requests
from django.http import HttpResponse ,HttpResponseRedirect, Http404, JsonResponse
from django.urls import reverse
import SPARQLWrapper
from SPARQLWrapper import SPARQLWrapper, JSON
from datetime import datetime , date
from elasticsearch import Elasticsearch
es = Elasticsearch()

# Create your views here.
onto_list_to_Validate=[]

def index(request): # all functions in django takes as arguements the request object
	
	context={
		
	}
	return render(request,'FoodOnto_App/index.html',context)
def home(request): # all functions in django takes as arguements the request object
	
	context={
		
	}
	return reverse(request,'FoodOnto_App/index.html',context)
def displayQueryResults(request):

    queryString=request.POST.get('query')
    
    # queryString = "SELECT * WHERE { ?s ?p ?o. }"
    URL="http://localhost:3030/FoodOnto/sparql"
    sparql = SPARQLWrapper(URL)

    sparql.setQuery(queryString)
    sparql.setReturnFormat(JSON)
    # results = sparql.query().convert()
    try :
        # ret = sparql.query()
        data = sparql.query().convert()
        # ret is a stream with the results in XML, see <http://www.w3.org/TR/rdf-sparql-XMLres/>
        # # print(ret)
    except :
        deal_with_the_exception()
    
    # for result in results["results"]["bindings"]:
    #     print(result["subject"]["value"])
        # print(result["predicate"]["value"].split("#")[1])

    

    
    lst=[]# this list is going to store the values of an subject predicate and object for all
    for datum in data["results"]["bindings"]:
        print(datum)
        dic={}
        # print("\n",datum['subject']['value'].split("#")[-1])
        # print("\n",datum['predicate']['value'].split("#")[-1])
        # print("\n",datum['object']['value'].split("#")[-1])
        dic['subject']=datum['subject']['value'].split("#")[-1]
        dic['predicate']=datum['predicate']['value'].split("#")[-1]
        dic['object']=datum['object']['value'].split("#")[-1]
        dic['id']=datetime.now().timestamp() +1

        lst.append(dic)

   
    

    context={
		"results":lst
	}
    return render(request,'FoodOnto_App/result.htm',context)

   



    # return JsonResponse(lst)
    return HttpResponse(lst)


def result(request): # all functions in django takes as arguements the request object
	
	context={
		
	}
	return render(request,'FoodOnto_App/result.htm',context)

def register(request): # all functions in django takes as arguements the request object
	
	context={
		
	}
	return render(request,'FoodOnto_App/register.htm',context)

def verify(request): # all functions in django takes as arguements the request object
	print(onto_list_to_Validate)
	context={
		"ontos":onto_list_to_Validate[1:]
	}
	return render(request,'FoodOnto_App/verify.htm',context)

def login(request): # all functions in django takes as arguements the request object
	
	context={
		
	}
	return render(request,'FoodOnto_App/login.htm',context)

def update(request): # all functions in django takes as arguements the request object
    subject=request.POST.get('subject')
    predicate=request.POST.get('predicate')
    object=request.POST.get('object')

    new_onto={}
    new_onto['subject']=subject
    new_onto['predicate']=predicate
    new_onto['object']=object
    onto_list_to_Validate.append(new_onto)
   

    # print(new_onto)
    context={
       
		
	}
    return render(request,'FoodOnto_App/update.htm',context)

def updateOnto(request):
    subject=request.POST.get('subject')
    predicate=request.POST.get('predicate')
    object=request.POST.get('object')
    data={}
    data['subject']=subject
    data['predicate']=predicate
    data['object']=object

    
    onto_list_to_Validate.pop()
    print(onto_list_to_Validate)
    # return HttpResponse("Validated Successfully")


# doc = {
#     'author': 'Mike Pence',
#     'text': 'I am happy to announce that eeeh.',
#     'timestamp': datetime.now(),
# }

    res = es.index(index="test-index", id=datetime.timestamp, body=data)
    context={

    }

    return render(request, 'FoodOnto_App/verify.htm',context)
