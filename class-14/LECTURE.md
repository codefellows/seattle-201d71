# Class 14: Psych Safety and Reinstantiation

## Psychological Safety

- Safety among teammates.
- What is Psychological Satety?
  - Gist of the Reading
    - 2 Perspectives
      - Rosovsky: Student at Yale
        - shes part 2 seperate teams
          - One Good, one not so good
          - Really smart a driven team, didn't necessarily equate to a great team dynamic.
      - Google: Researchers looking to see what makes a good team.
        - Everyone can trust each other.
        - Shared Communication.
        - Teams should be able to read each other emotionally.
    - 3 things from ya'll
      - What does Psychological Safety this mean to you?
      - Previous experience that relates to either good Psych safety or bad?
      - What are the results of good psych safety?

- Victor: Wanting to be around other people, and that others care about what you are saying.
  - Past teams: alpha male types can be difficult, important for leaders to be agreed upon, should direct focus, less of a dictator.
  - Results: If you are not open, you are no working well as a team.
- Zach: Speaking up without fear of reprisal, other people thinking they are stupid.
  - Managing a warehouse, small team, moving a lot of parts, jobs divided up and being able tto speak up was great for team productivity.
- Dan: empowerment and decision making.
  - manager that was insecure, not trusted by his manager which trickles down.  Managers have to be the mediator of Psych safety.
    - Work suffers because of this.
    - Being comfortable making mistakes leads to better work.
- Paulo: Let me eat, have lunch at an approprate time, bring snacks, having the comforts that mediate anxiety
  - In the army you can't bring snacks, if I'm not alowed to eat I get crabby.
  - Results: having a better attitude.
- Jason: Former employer, really aggressivly move forward with an implementation of efficiency, no group think.
  - Opinions must be heard, and if that's not allowed, members of the group get frustrated.
  - Strict adherance to guidelines cause discomfort among group.
- Jacob: Thought about the article, social norms among a group, we have subtle contracts that we make wih people
  - If they are unhealthy things don't work out.
  - Having the permission to take care of yourself is empowering!
  - Conforming to an idea that comes the top down fo what a group is, will lead to less productivity.
  - In a group where ideas are important, good ideas start out as bad ideas, let those ideas flow.
  - Disfunctional teams, had meetings too often, doing the things prescribed as healthy, led in a structured fashion which felt forced. Cuased frustration.
- Matthew: Feeling valued, feeling equal, position should feel valued on a human level.
  - We have a hierarchy of needs, in order to reach the higher levels of productivity we should realize each one
  - Pilot Instructor: not knowing hohw to fly, getting abused verbally, realized that 'I have to suck it up'.
  - Culture of verbal abuse, not the best way of teaching people.
  - We need to be flexible for our teammates and associates.
  - Results: with good Psych safety, sum of group is greater than each individual.  Military does a good job of 'buddy teams',  summing effectiveness leads to collective effectiveness if each member is valued.
- Mal: Idea of not having to create presentations for work environment, not being someone who are not.
  - Last job feeling like this was a toxic aspect.
  - Good norm, foster communication within the group.
- Fizzo: empowering people within a group, instilling love an respect instead of fear and domination.
  - Groups flourish through a collective sense of looking our and respecting one another.
  - Important to listen and give everyone equal time.
  - We all carry things around with us, and we should create a culture where we all feel this is okay.
  - Working as a server, being able to communicate jokes of all types was good for productivety and there was a norm that was created and experienced.
  - People will match the dynamic of the group members around them.  People will treat others how they think about themselves.
- Andy: Empathy plays a big role in group dynamics, no grouping of people that was the most successfull.  No way to group people into more or less successful groups.  People who were more empathetic tend to do better in group settings, which is a personal thing.
  - Individuals can fold into a group dyncamic that is more than just the individual.
  - When someone offends someone else we should voice that, if the group supports this the group will perform better.
  - Best group situations came from groups with no formal leader, trial and error and letting those processes take their own path is important.
- Irwin: Being able to be yourself without feeling like you are going to get kicked out.
  - Bad experience that became a good experience, boss that very rank structured in terms of leadership, only cared about conviction rates.
    - New boss cared more about the collective case work, better group dynamic made team more productive.
- Nicki: Personal experience, good leader vs bad leader.  Good leader was more supportive, and bad leader was not so great :(
- Yuliya: Even rights and even responsibilities, members who want more attention were more difficult to work with
  - Ideas are better if other people can hear them.
  - Managers that didn't want member to help each other.
- James: to be heard out based on knowledge and true self, and not on physical appearance.
- Ted: Military has good and bad leaders, you can learn from bad leaders, what is causing them to behave badly or be bad leaders.
  - Hard to humanize somone when is abrasive and showing qualities youu don't admire.
  - Understanding the people are human, don't spend time hating bosses or group members.
  - All team members should actively try and improve things even with the perspective that their leader is not a great leader.
  - We all experience these things is teams and groups, how can we be empathetic to these instances.
  - Always inject humor!  These are important to humanize situations.
- Connor: Being comfortable in whatever you're doing.
- Nicholas: Having something to bond over.
  - Bonding over the shared feeling that you dislike your job.
  - Not being afraid of being ridiculed.
  - Not being afraid to call someone out, or be honest about, and be straight forward.
  - Knowing that whatever the goal is, is something we all are trying to achieve.
  - Working as data analyst, one of 2 working over the holidays, not getting honest performance review caused tensions when told that you're losing your job because of performance.
  - The ability to be transparent.
- Mason: Being able to be truthful about the positive things and the negative things.
  - Opportunities can be missed if we are not truthful to ourselves and coworkers.
  - Starting the tech, coming from a place of need and not empowerment, as tech workers we get to voice our empowerment, and being a yes man can cause issues for ourselves and our team.
  - Being honest will let our teams and projects flourish.
    - Making a safe environment to fail.
  - Communicating needs with the team is important, and allows us to feel empowered.
- Lydia: Being able to be vulnerable and authentic without the fear of being ridiculed.
  - Allows us to be open and digest healthy judgement and criticism.
  - Realizing that our character is safe, and that we belong in the environment and can contribute well.
  - Innocation comes from a place where these values are realized.

## Code Review

- All your javascript data about Products needs to survive a page refresh.
  - Using localStorage???
  - Implementing was not a huge a huge feature that was experienced.
    - Required storing an object as string
    - And converting that string back into an object using:
      - localStorage.getItem
      - locaStorage.setItem
      - JSON.stringify
      - JSON.parse
  - What places are continueing to struggle or previous features.
- Fizzo: are there values that need to be redefined in the constructor.
  - Add Zero's to the constructor in order to have an input for values.  
- Jacob: lost in variable land.
  - How can we keep track of varibles in your own code.
  - define types of varaibles an a place that you carve out in your code
    - global variables always at the top.
    - functions have their own space in your code.
    - constructors have their own space.
    - Leave comment blocks
- Nicholas: Negecting to write code in README files

```javascript

/**
 *
 * *** GLOBAL VARIABLES ***
 *  
 */

```

Write stuff in your README.md

- Documenting your code and how it should used and how you name varaibles and what they are used is the most important.

## Re-Instantiation

- An object literal is not quite the same thing as an object from a contructor.
  - If there is anything associated with the prototype we need to "re-instantiate"
  

## Lab 14

- Comes with starter that is organized in a way that may look foreign
  - sprinkled with `TODO:`
