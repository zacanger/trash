from django.shortcuts import render
from django.http import HttpResponse, Http404
# from django.template import loader
from django.shortcuts import render, get_object_or_404
from .models import Question


def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    context = {"latest_question_list": latest_question_list}
    # template = loader.get_template("polls/index.html")
    # return HttpResponse(template.render(context, request))
    return render(request, "polls/index.html", context)


def detail(request, question_id):
    question = get_object_or_404(QUestion, pk=question_id)
    # try:
    #     question = Question.objets.get(pk=question_id)
    # except Question.DoesNotExist:
    #     raise Http404("no question %s" % question_id)
    return render(request, "polls/detail.html", {"question": question})


def results(request, question_id):
    return HttpResponse("results of %s" % question_id)


def vote(request, question_id):
    return HttpResponse("voting on %s" % question_id)
