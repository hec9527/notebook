from django.shortcuts import render, get_object_or_404
from django.template import loader
from django.http import HttpResponse, HttpResponseRedirect
from .models import Question, Choice
from django.urls import reverse
from django.views import generic


def index(request):
    return HttpResponse("This is the first webpage I done")


def detail(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except KeyError:  # Choice.DoesNotExist)
        # Redisplay the question voting form.
        return render(request, 'vote/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('vote:result', args=(question.id,)))


def result(request, question_id):
    # question_text = get_object_or_404(Question, pk=question_id)
    # question_ans = q
    return HttpResponse(f"您正在结果界面，{question_id}")


def vote(request, question_id):
    return HttpResponse(f"您正在问题界面,{question_id}")


def myTest(request, num, num1):
    return HttpResponse(f"多个参数绑定页面测试结果：{num},{num1}")


def lastTemplate(request):
    last_question_lis = Question.objects.order_by('pub_date')[:5]
    temp = loader.get_template("vote/index.html")
    context = {
        'last_question_lis': last_question_lis
    }
    return HttpResponse(temp.render(context, request))


def lastRender(request):
    last_question_lis = Question.objects.order_by("pub_date")[:5]
    context = {
        "last_question_lis": last_question_lis
    }
    return render(request, 'vote/index.html', context=context)


def IndexView(generic.ListView):
    
    return 1


def ResuleView(generic.DetailView):
    return 1
